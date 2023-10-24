import { useRouter } from "next/router";

const productID = () => {
    const router = useRouter();
    const ID = router.query.productID; // Assuming "id" is the key in the query object
    return (
        <div>
            <h1>Hi, this is the route: {ID}</h1>
        </div>
    );
}

export default productID;
