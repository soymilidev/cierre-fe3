import React from "react";
import Card from "../components/Card";
import { useContextGlobal } from "../components/utils/global.context";


const Favs = () => {
    const { favState } = useContextGlobal();
    console.log(favState);

    if (!favState) {
        return <h2>Error</h2>;
    }

    return favState?.length === 0 ? (
        <h2>Aún no has agregado ningún favorito</h2>
    ) : (
        <>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
                {favState?.map((dentist) => (
                    <Card key={dentist.id} dentist={dentist} />
                ))}
            </div>
        </>
    );
};

export default Favs