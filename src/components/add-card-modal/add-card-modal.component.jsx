import React, {
    useCallback,
    useState,
} from 'react';
import PropTypes from 'prop-types';
import {
    AddButton,
    CancelButton,
    Container,
    Controls,
    Modal,
    ModalTextarea,
    ModalInput,
} from '../../mixins';

const AddCardModal = ({
    setNewCard,
    setShowAddNewCardModal,
}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddButton = useCallback(() => {
        if (title && description) {
            const result = {
                title,
                description,
            };

            setNewCard(result);
            setShowAddNewCardModal(false);
        }

    }, [
        description,
        setNewCard,
        setShowAddNewCardModal,
        title,
    ]);

    return (
        <Container>
            <Modal>
                <ModalInput
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task"
                    type="text"
                    value={title}
                />
                <ModalTextarea
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    cols="5"
                    rows="5"
                    maxLength="500"
                    value={description}
                />
                <Controls>
                    <AddButton onClick={handleAddButton}>Add card</AddButton>
                    <CancelButton onClick={() => setShowAddNewCardModal(false)}>Cancel</CancelButton>
                </Controls>
            </Modal>
        </Container>
    );
};

AddCardModal.propTypes = {
    setNewCard: PropTypes.func,
    setShowAddNewCardModal: PropTypes.func,
};

export default React.memo(AddCardModal);
