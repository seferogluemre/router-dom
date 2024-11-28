import { FormControl } from "react-bootstrap";
import { UserState } from "../stores/UserStore";
import { Form } from "react-router-dom";
import { ChangeEvent } from "react";


export default function HomePage() {

    const firstName = UserState((state) => state.firstName);
    const lastName = UserState((state) => state.lastName);
    const age = UserState((state) => state.getAge())
    const setFirstName = UserState((state) => state.setFirstName);
    const setLastName = UserState((state) => state.setLastName);
    const setBirthDate = UserState((state) => state.setBirthDate);

    function handleChangeFirstname(e: ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value)
    }
    function handleChangeLastName(e: ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value)
    }
    function handleChangeBirtDate(e: ChangeEvent<HTMLInputElement>) {
        const birthDatePayload = new Date(e.target.value);
        setBirthDate(birthDatePayload)
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
                İsim:{lastName}
            </div>
            <div style={{ margin: "50px" }}>
                Yaş:{age}
            </div>  
            <div style={{ margin: "100px" }}>
                <Form>
                    <div className="mb-4">
                        <label >İsim</label>
                        <FormControl onChange={handleChangeFirstname} placeholder="İsminizi giriniz..." className="w-25" type="text" />
                    </div>
                    <div className="mb-4">
                        <label >Soyisim</label>
                        <FormControl onChange={handleChangeLastName} placeholder="Soyisiminizi giriniz..." className="w-25" type="text" />
                    </div>
                    <div className="mb-4">
                        <label >Dogum Tarihiniz</label>
                        <FormControl onChange={handleChangeBirtDate} className="w-25" type="date" />
                    </div>
                </Form>
            </div>
        </div>
    )
}