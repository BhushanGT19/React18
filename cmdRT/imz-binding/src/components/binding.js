import { useState, useEffect } from "react";

export default function Binding() {
    const [dogs, setDogs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to fetch dogs
    const fetchDogs = () => {
        setLoading(true);
        setError(null);

        fetch("https://dog.ceo/api/breeds/image/random/10")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                if (data.status === "success" && Array.isArray(data.message)) {
                    const formattedDogs = data.message.map((url, index) => {
                        const breedMatch = url.split("/")[4] || "Unknown";
                        return {
                            id: index + 1,
                            breed: breedMatch.replace("-", " "),
                            image: url
                        };
                    });
                    setDogs(formattedDogs);
                } else {
                    throw new Error("Failed to fetch dog images");
                }
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };

    // Load dogs on first render
    useEffect(() => {
        fetchDogs();
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">🐶 Dog CEO API - Random Dog Photos</h1>

            <div className="text-center mb-3">
                <button className="btn btn-primary" onClick={fetchDogs} disabled={loading}>
                    {loading ? "Loading..." : "Refresh Dogs"}
                </button>
            </div>

            {error && <p className="text-danger text-center">{error}</p>}

            {/* Table View */}
            <table className="table table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Breed</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {dogs.map((dog) => (
                        <tr key={dog.id}>
                            <td>{dog.id}</td>
                            <td>{dog.breed}</td>
                            <td>
                                <img
                                    src={dog.image}
                                    alt={dog.breed}
                                    width="80"
                                    height="80"
                                    style={{ objectFit: "cover", borderRadius: "8px" }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Card View */}
            <div className="row mt-4">
                {dogs.map((dog) => (
                    <div className="col-md-3 mb-4" key={dog.id}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={dog.image}
                                className="card-img-top"
                                alt={dog.breed}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title text-capitalize">{dog.breed}</h5>
                                <p className="card-text">Dog ID: {dog.id}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
