import Layout from "./components/Layout/Layout";
import List from "./components/list/List";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/new/Details/Details";
import NotFound from "./components/NotFound/NotFound";
import Modal from "./components/Modal/Modal";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<List />} />
                    <Route path="/list" element={<List />}>
                        <Route
                            path=":id"
                            element={
                                <Modal>
                                    <Details />
                                </Modal>
                            }
                        />
                    </Route>

                    <Route path="/new" element={<Details />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
