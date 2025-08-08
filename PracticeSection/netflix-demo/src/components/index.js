import "./index.css";
import Header from "./header";
import Register from "./register";
import Footer from "./footer";
import Main from "./main";

export default function Index() {
    return (
        <div className="container-fluid">
            <div className="box">
                <header>
                    <Header />
                </header>
                <section>
                    <main>
                        {/* <Main /> */}
                        <Register />
                    </main>
                </section>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
}