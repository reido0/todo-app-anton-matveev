import React, {
    useCallback,
    useState,
} from 'react';
import PropTypes from 'prop-types';
import {
    AddButton,
    CancelButton,
    ModalContainer,
    Controls,
    Modal,
    ModalTextarea,
    ModalInput,
} from '../../mixins';
import { MODAL_PLACEHOLDERS } from '../../constants';

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
        <ModalContainer>
            <Modal>
                <ModalInput
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={MODAL_PLACEHOLDERS.INPUT}
                    type="text"
                    value={title}
                />
                <ModalTextarea
                    cols="5"
                    maxLength="500"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={MODAL_PLACEHOLDERS.TEXTAREA}
                    rows="5"
                    value={description}
                />
                <Controls>
                    <AddButton onClick={handleAddButton}>Add card</AddButton>
                    <CancelButton onClick={() => setShowAddNewCardModal(false)}>Cancel</CancelButton>
                </Controls>
            </Modal>
        </ModalContainer>
    );
};

AddCardModal.propTypes = {
    setNewCard: PropTypes.func,
    setShowAddNewCardModal: PropTypes.func,
};

export default React.memo(AddCardModal);
