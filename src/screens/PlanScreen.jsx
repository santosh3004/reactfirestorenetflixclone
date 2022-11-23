import React ,{useState,useEffect} from 'react'
import './PlanScreen.css';
import db from '../firebase';
import { doc, onSnapshot, collection, query, where, QuerySnapshot } from "firebase/firestore";
import {loadStripe} from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function PlanScreen(props) {
  const [products,setProducts]=useState([]);
  const [user,setUser]=useState(null);
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')));
  },[]);
  //const userFromSelector=useSelector(selectUser);
  const[subscription,setSubscription]=useState(null);

console.log(props.uid);
  useEffect(() =>{
  db.collection("customers")
     .doc(props.uid)
     .collection("subscriptions")
     .get().
     then ((querySnapshot) => {
      querySnapshot.forEach(async (subscription)=>
         setSubscription({
           role: subscription.data().role,
           current_period_end: subscription.data().current_period_end.seconds,
          current_period_start: subscription.data().current_period_start
             .seconds,
         }))
       })},[props.uid]);


  useEffect(() => {
    const q=query(collection(db,'products'));
    const data=onSnapshot(q,(querySnapshot)=>{
      const tempProducts={};
      querySnapshot.docs.map(d=>{
        tempProducts[d.id]=d.data();
        // const q2=query(collection(db,d,'prices'));
        // onSnapshot(q2,(querySnapshot2)=>{
        //   querySnapshot2.docs.map(d2=>{
        //     tempProducts[d.id].prices={
        //       priceID:d2.id,
        //       priceData:d2.data()
        //     }
        //   })
        // })
      })
      setProducts(tempProducts);
    })
    // db.collection('products').get.where('active','==',true).get.then(querySnapShots=>{
    //   const products={};
    //   querySnapShots.forEach(async productDoc => {
    //     products[productDoc.id]=productDoc.data();
    //     const priceSnap=await productDoc.ref.collection('prices').get();
    //     priceSnap.docs.foreach(price=>{
    //       products[productDoc.id].prices={priceId:price.id
    //       ,priceData:price.data()
    //     }
    //     })
    //   });
    //   setProducts(products);
    // });
    return data;
  }, []);


  const loadCheckOut=async (priceId)=>{
    const docRef=await db.collection('customers').doc(props.uid).collection('checkout_sessions').add({price:priceId
    ,success_url:window.location.origin,
  cancel_url:window.location.origin});
  docRef.onSnapshot((async(snapshot)=>{
    const {error,sessionId}=snapshot.message 
    if(error){
alert(`An error occured: ${error.message}`);
    }
    if(sessionId){
      const striipe=await loadStripe('pk_test_51LHAsmLWrUa7wRJcDhHQLMc2L2QhMkLjt3ndZlxdPH0DpDBFiIrfqQdcudBxS7RJCvFKplCuENyf4dhf1LUzB4Xs00R1P242KB');
      striipe.redirectToCheckout({sessionId});
    }
  })
    )
  }
  return (
    <div className='plansScreen'>
      {subscription && <p>Renewal Date: {new Date(subscription?.current_period_end*1000).toLocaleDateString()}</p>}
      {Object.entries(products).map(([productId,productData])=>{
        //TODO add some logic t check if the user's subscription is active....
        const isCurrentPackage=productData.name.toLowerCase().includes(subscription?.role)
        return(
          <div key={productId}>
            <div className={`${isCurrentPackage && "planScreen__plan__disabled"} planScreen__plan`}>
              <div className="planScreen__info">
                <h5>{productData.name}</h5>
                <h6>{productData.description}</h6>
              </div>
              <button onClick={()=>{
                !isCurrentPackage && loadCheckOut('price_1M7LXdLWrUa7wRJcOU1PWlsw')}}>{
                isCurrentPackage?'Current Package':'Subscribe'
              }</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PlanScreen