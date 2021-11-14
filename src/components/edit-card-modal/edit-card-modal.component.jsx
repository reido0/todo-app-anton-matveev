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

const EditCardModal = ({
    card,
    editCardById,
    updateCard,
}) => {
    const [title, setTitle] = useState(card.title);
    const [description, setDescription] = useState(card.description);

    const handleSaveButton = useCallback(() => {


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
