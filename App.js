import { useModal, ModalProvider } from "./ModalContext";
import ModalManager from "./ModalManager";

export const App = () => {
    return (
        <>
            <ModalProvider>
                <YourComponent />
                <ModalManager />
            </ModalProvider>
        </>
    )
}



function YourComponent() {
    const { showModal } = useModal();

    const handleShowModal1 = () => {
        showModal('Modal1', 'Data for Modal 1');
    };

    const handleShowModal2 = () => {
        showModal('Modal2', 'Data for Modal 2');
    };

    return (
        <div>
            <button onClick={handleShowModal1}>Show Modal 1</button>
            <button onClick={handleShowModal2}>Show Modal 2</button>
        </div>
    );
}