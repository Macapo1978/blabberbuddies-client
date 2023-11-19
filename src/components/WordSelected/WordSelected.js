import "./WordSelected.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const WordSelected = ({wordId}) => {


    return (
        <section>
            Word Selected {wordId}
            Aca tengo que llamar a la api de pexels <br></br>
            llamara a la libreria de react para que diga la palabra
        </section>

    );
};

export default WordSelected;