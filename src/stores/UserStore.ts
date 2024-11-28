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
    setHeight: (payload:number | undefined)=>void;
    setWeight: (payload:number | undefined)=>void;
    getAge:()=>number|undefined;
    getBmi:()=>number;
    getBmiResult:()=>"Zayıf" | "Normal" |"Kilolu" | "Obez";
}

const calculateBmiScore=(weight:number,height:number)=>(weight / ((height*height)/10000)).toFixed(2);



export const UserState = create<UserState>()((set,get) => ({
    firstName:"",
    lastName:"",
    setFirstName: (payload) => set({ firstName: payload }),
    setLastName: (payload) => set({ lastName: payload }),
    setBirthDate: (payload)=>set({ birthDate: payload }),
    setHeight: (payload)=>set({ height: payload }),
    setWeight: (payload)=>set({ weight: payload }),

    getAge:()=>{
        const birthDate=get().birthDate;
        if(!birthDate)return;   
        const ageDifmis=Date.now() - birthDate.getTime();
        const ageDate=new Date(ageDifmis);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    },
    
    getBmi:()=>{
        const weight=get().weight;
        const height=get().height;
        
        if(!height || !weight) return 0;
    
        const score= +calculateBmiScore(weight,height);
        return score;
    },
    getBmiResult:()=> {
        const getBmi=get().getBmi();
        if(getBmi<18.5)return "Zayıf";
        if(getBmi<25)return "Normal"
        if(getBmi<30)return "Kilolu"

        return "Obez";
    },
}))