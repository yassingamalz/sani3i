import{aa as n,m as s}from"./chunk-YEEZGBIQ.js";var i=(()=>{class r{constructor(){this.currentUserSubject=new s(null),this.currentUser$=this.currentUserSubject.asObservable(),this.userTypeSubject=new s(null),this.userType$=this.userTypeSubject.asObservable();let e=localStorage.getItem("currentUser");if(e){let t=JSON.parse(e);this.currentUserSubject.next(t),this.userTypeSubject.next(t.type)}}setUserType(e){this.userTypeSubject.next(e)}login(e){let t={id:1,name:"\u0623\u062D\u0645\u062F \u0645\u062D\u0645\u062F",email:"ahmed@example.com",phone:"01234567890",type:e,rating:e==="worker"?4.8:void 0,completedJobs:e==="worker"?150:void 0,balance:e==="worker"?2500:void 0};this.currentUserSubject.next(t),this.userTypeSubject.next(e),localStorage.setItem("currentUser",JSON.stringify(t))}logout(){this.currentUserSubject.next(null),this.userTypeSubject.next(null),localStorage.removeItem("currentUser")}isAuthenticated(){return this.currentUserSubject.value!==null}getCurrentUser(){return this.currentUserSubject.value}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=n({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{i as a};
