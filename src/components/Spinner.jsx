import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: 'block',
    margin: '100px auto',
}

// eslint-disable-next-line react/prop-types
const Spinner = ({ loading }) => {
    return (
        <ClipLoader
            size={150}
            color={"#0575af"}
            loading={loading}
            cssOverride={override}
        />
    )
}

export default Spinner
