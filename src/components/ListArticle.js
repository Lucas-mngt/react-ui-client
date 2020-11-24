/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Article from './Article'

const ListArticle = (props) => {
    const colors = props.colors
    const [moreArticle, setMoreArticle] = React.useState(false);

    const toggle = React.useCallback(
      () => setMoreArticle(!moreArticle),
      [moreArticle, setMoreArticle],
    );

    return (
        <div className="list-article" style={{textAlign: 'left', marginBottom: '15px'}}>
            <Container fluid style={{marginBottom: '15px'}}>
                <div className="card-deck">
                    {colors.slice(0,3).map(color => (
                        <Article color={color}/>
                    ))}
                </div>
            </Container>
            {moreArticle ?
                <Container fluid>
                    <div className="card-deck">
                        {colors.slice(3,6).map(color => (
                            <Article color={color}/>
                        ))}
                    </div>
                </Container> 
                : <center> 
                    <button type="button" onClick={toggle} class="btn btn-primary btn-lg">Large button</button>
                </center> 
            }
        </div>
    );
};


export default ListArticle;
