import React, { useState } from 'react';
import Modal from "./Modal";
function Portfolio(props) {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setModalOpen1] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const openModal1 = () => {
        setModalOpen1(true);
    };
    const closeModal1 = () => {
        setModalOpen1(false);
    };

    return (
        <div className="back">
            <div className="wrapper d-flex flex-direction-column">
                <p className="w-100 title font-size-big"><span className="gradient">@Portfolio</span></p>
                <div id="card-wrap" className="d-flex w-100">
                    <button onClick={ openModal } className="portfolio-card"></button>
                    <Modal open={modalOpen} close={closeModal} header="Project 1">
                        text
                    </Modal>

                    <button onClick={openModal1} className="portfolio-card"></button>
                    <Modal open={modalOpen1} close={closeModal1} header="Project 2">
                        text
                    </Modal>

                    <button onClick={openModal} className="portfolio-card"></button>
                    {/*<Modal open={modalOpen} close={closeModal} header="Project 3">*/}
                    {/*    text*/}
                    {/*</Modal>*/}

                    <button onClick={openModal} className="portfolio-card"></button>
                    {/*<Modal open={modalOpen} close={closeModal} header="Project 4">*/}
                    {/*    text*/}
                    {/*</Modal>*/}
                </div>

                <div className="d-flex w-100">
                    <button onClick={openModal} className="portfolio-card"></button>
                    {/*<Modal open={modalOpen} close={closeModal} header="Project 5">*/}
                    {/*    text*/}
                    {/*</Modal>*/}

                    <button onClick={openModal} className="portfolio-card"></button>
                    {/*<Modal open={modalOpen} close={closeModal} header="Project 6">*/}
                    {/*    text*/}
                    {/*</Modal>*/}

                    <button onClick={openModal} className="portfolio-card"></button>
                    {/*<Modal open={modalOpen} close={closeModal} header="Project 7">*/}
                    {/*    text*/}
                    {/*</Modal>*/}

                    <button onClick={openModal} className="portfolio-card"></button>
                    {/*<Modal open={modalOpen} close={closeModal} header="Project 8">*/}
                    {/*    text*/}
                    {/*</Modal>*/}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;