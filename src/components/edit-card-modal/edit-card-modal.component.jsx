import React, {
    useCallback,
    useState,
} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Container,
    Controls,
    DiscardButton,
    Modal,
} from './edit-card-modal.styles';

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
        <Container>
            <Modal>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Controls>
                    <Button onClick={handleSaveButton}>Save</Button>
                    <DiscardButton onClick={() => editCardById('')}>Cancel</DiscardButton>
                </Controls>
            </Modal>
        </Container>
    );
};

EditCardModal.propTypes = {
    card: PropTypes.object,
    editCardById: PropTypes.func,
    updateCard: PropTypes.func,
};

export default React.memo(EditCardModal);
