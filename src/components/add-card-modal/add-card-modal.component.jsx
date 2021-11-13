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
    StyledInput,
    StyledTextArea,
} from './add-card-modal.styles';

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
                <StyledInput
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task"
                    type="text"
                    value={title}
                />
                <StyledTextArea
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    cols="5"
                    rows="5"
                    maxLength="500"
                    value={description}
                />
                <Controls>
                    <Button onClick={handleAddButton}>Add card</Button>
                    <DiscardButton onClick={() => setShowAddNewCardModal(false)}>Cancel</DiscardButton>
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
