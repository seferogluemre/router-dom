import { FormControl } from "react-bootstrap";
import { UserState } from "../stores/UserStore";
import { Form } from "react-router-dom";
import { ChangeEvent } from "react";


export default function HomePage() {

    const firstName = UserState((state) => state.firstName);
    const lastName = UserState((state) => state.lastName);
    const birthDate = UserState((state) => state.birthDate);
    const kg = UserState((state) => state.weight);
    const cm = UserState((state) => state.height);

    const age = UserState((state) => state.getAge())
    const bmi = UserState((state) => state.getBmi())
    const getBmiResult = UserState((state) => state.getBmiResult())

    const setFirstName = UserState((state) => state.setFirstName);
    const setLastName = UserState((state) => state.setLastName);
    const setBirthDate = UserState((state) => state.setBirthDate);
    const setHeight = UserState((state) => state.setHeight);
    const setWeight = UserState((state) => state.setWeight);

    function handleChangeFirstname(e: ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value)
    }
    function handleChangeLastName(e: ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value)
    }
    function handleChangeBirtDate(e: ChangeEvent<HTMLInputElement>) {
        setBirthDate(e.target.valueAsDate!)
    }
    function handleChangeHeight(e: ChangeEvent<HTMLInputElement>) {
        setHeight(e.target.valueAsNumber || undefined)
    }
    function handleChangeWeight(e: ChangeEvent<HTMLInputElement>) {
        setWeight(e.target.valueAsNumber || undefined)
    }

    return (
        <div>
            <h1>Anasayfaya hoşgeldiniz</h1>
            <div>
            </div>

            <div style={{ margin: "50px" }}>
                İsim:{firstName}
            </div>
            <div style={{ margin: "50px" }}>
                Soyİsim:{lastName}
            </div>
            <div style={{ margin: "50px" }}>
                Yaş:{age}
            </div>
            <div style={{ margin: "50px" }}>
                Boy:{cm}
            </div>
            <div style={{ margin: "50px" }}>
                Kilo:{kg}
            </div>
            <div style={{ margin: "50px" }}>
                Vicut Kitle Endeksi:{bmi} & {getBmiResult}
            </div>


            <div style={{ margin: "100px" }}>
                <Form>
                    <div className="mb-4">
                        <label >İsim</label>
                        <FormControl onChange={handleChangeFirstname} value={firstName} placeholder="İsminizi giriniz..." className="w-25" type="text" />
                    </div>
                    <div className="mb-4">
                        <label >Soyisim</label>
                        <FormControl onChange={handleChangeLastName} value={lastName} placeholder="Soyisiminizi giriniz..." className="w-25" type="text" />
                    </div>
                    <div className="mb-4">
                        <label >Dogum Tarihiniz</label>
                        <FormControl onChange={handleChangeBirtDate} value={birthDate?.toLocaleDateString("en-CA")} className="w-25" type="date" />
                    </div>
                    <div className="mb-4">
                        <label >Boy </label>
                        <FormControl onChange={handleChangeHeight} value={cm} className="w-25" type="number" />
                    </div>
                    <div className="mb-4">
                        <label >Kilo </label>
                        <FormControl onChange={handleChangeWeight} value={kg} className="w-25" type="number" />
                    </div>
                </Form>
            </div>
        </div>
    )
}