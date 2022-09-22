import "@passageidentity/passage-auth";

export default function BiometricSignin(){

    return(
        <div>

            <h1>Passage Demo</h1>
            <passage-auth app-id={process.env.REACT_APP_PASSAGE_APP_ID}>

            </passage-auth>
        </div>
    );
};