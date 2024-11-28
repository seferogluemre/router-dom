import { create } from 'zustand'

interface UserState {
    firstName:string;
    lastName:string;
    birthDate?:Date;
    height?:number;  
    weight?:number;
    setFirstName: (payload:string)=>void;
    setLastName: (payload:string)=>void;
    setBirthDate: (payload:Date)=>void;
    getAge:()=>number|undefined;
}

export const UserState = create<UserState>()((set,get) => ({
    firstName:"",
    lastName:"",
    setFirstName: (payload) => set({ firstName: payload }),
    setLastName: (payload) => set({ lastName: payload }),
    setBirthDate: (payload)=>set({ birthDate: payload }),
    getAge:()=>{
        const birthDate=get().birthDate;
        if(!birthDate)return;
        const ageDifmis=Date.now() - birthDate.getTime();
        const ageDate=new Date(ageDifmis);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

}))