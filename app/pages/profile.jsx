import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { RoundedButton, FileUpload } from '../components';

/* Containers */
const Page = styled.div`
    display: flex;
    alignItems: center;
    justifyContent: center;
    height: 100vh;
`;

const FormContainer = styled.div`
    width: 500px;
    maxWidth: calc(100% - 40px);
    margin: 40px auto;
`;

const Flexer = styled.div`
    display: flex;
    flexDirection: column;
`;

const InputContainer = styled.div`
    margin: 30px 0;
`;

const Input = styled.input`
    width: 100%;
    margin: 10px 0;
    padding: 8px;
`;

const ButtonGroup = styled.div`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
`;

const SectionHeader = styled.h2`
    fontSize: 40px;
    color: ${props => props.color};
    fontWeight: 500;
    margin: 0;
`;

class Profile extends React.Component {
    constructor() {
        super();

        this.state = {
            birthday: '',
            university: '',
            focus: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleAttributeChange = this.handleAttributeChange.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    // Generic function for changing state
    // -- input using this must have a name attribute
    handleAttributeChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFileUpload(file) {
        this.setState({
            resume: file
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('save profile');
    }

    render() {
        return (
            <Page>
                <FormContainer>
                    <SectionHeader color={this.props.theme.primary}>Profile</SectionHeader>
                    <form onSubmit={this.onSubmit}>
                        <Flexer>
                            <InputContainer>
                                <Input
                                    id="birthday"
                                    type="text"
                                    name="birthday"
                                    placeholder="01/01/1970"
                                    value={this.state.birthday}
                                    onChange={this.handleAttributeChange}
                                />
                                <Input
                                    id="university"
                                    type="text"
                                    name="university"
                                    placeholder="University of Michigan"
                                    value={this.state.university}
                                    onChange={this.handleAttributeChange}
                                />
                                <Input
                                    id="focus"
                                    type="text"
                                    name="focus"
                                    placeholder="Underwater Basket Weaving"
                                    value={this.state.focus}
                                    onChange={this.handleAttributeChange}
                                />
                                <FileUpload
                                    defaultColor={this.props.theme.primary}
                                    hoverColor={this.props.theme.secondary}
                                    activeColor={this.props.theme.success}
                                    onFileSelect={this.handleFileUpload}
                                />
                            </InputContainer>
                            <ButtonGroup>
                                <RoundedButton
                                    type="submit"
                                    color={this.props.theme.primary}
                                >
                                Confirm
                                </RoundedButton>
                            </ButtonGroup>
                        </Flexer>
                    </form>
                </FormContainer>
            </Page>
        );
    }
}

function mapStateToProps(state) {
    return {
        authState: state.authState,
        theme: state.theme.data
    };
}

export default connect(mapStateToProps)(Profile);