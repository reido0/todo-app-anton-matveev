import React, {
    useCallback,
    useState,
} from 'react';
import PropTypes from 'prop-types';
import {
    AddButton,
    CancelButton,
    Controls,
    ErrorMessage,
    Modal,
    ModalContainer,
    ModalInput,
    ModalTextarea,
} from '../../mixins';
import {
    ERROR_MESSAGES,
    MODAL_PLACEHOLDERS,
} from '../../constants';

const EditCardModal = ({
    card,
    editCardById,
    updateCard,
}) => {
    const [title, setTitle] = useState(card.title);
    const [description, setDescription] = useState(card.description);
    const [error, setError] = useState(false);

    const handleSaveButton = useCallback(() => {
        if (!title || !description) {
            setError(true);

            return;
        } else {
            setError(false);
        }

        if (card.title !== title || card.description !== description) {
            const result = card;
            result.title = title;
            result.description = description;

            updateCard(result);
            editCardById('')
        } else {
            editCardById('');
        }

    }, [
        card,
        description,
        editCardById,
        title,
        updateCard,
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
                {error && (
                    <ErrorMessage>{ERROR_MESSAGES.MUST_BE_FILLED}</ErrorMessage>
                )}
                <Controls>
                    <AddButton onClick={handleSaveButton}>Save</AddButton>
                    <CancelButton onClick={() => editCardById('')}>Cancel</CancelButton>
                </Controls>
            </Modal>
        </ModalContainer>
    );
};

EditCardModal.propTypes = {
    card: PropTypes.object,
    editCardById: PropTypes.func,
    updateCard: PropTypes.func,
};

export default React.memo(EditCardModal);
