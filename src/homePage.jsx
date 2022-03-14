import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './style/style.css';
import { Link } from "react-router-dom";
import constant from "./common/constants";
import { Button, InputGroup, FormControl, Spinner } from 'react-bootstrap';
import { PencilSquare, CaretDown, ArrowCounterclockwise, PlusCircle, Trash, PatchPlus } from 'react-bootstrap-icons';
class HomePage extends React.Component {

    static get propTypes() {
        return {
            message: PropTypes.string, // just an example
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            showDeleteBtn: false,
            isLoaded: false,
            open: false,
            allItems: [],
            typeUpdate: null,
            index: null,
            strSearch: '',

        };
    }
    componentDidMount() {

        console.log("componentDidMount");
        // setTimeout(() => {
        //     this.showAll(false);
        // }, 700)

        this.getAllData(false);
    }

    //unsafe
    componentWillMount() {
        console.log("componentWillMount");
        // this.setOpen(null);
    }

    getAllData(dataDeleted) {
        this.setState({
            showDeleteBtn: dataDeleted ? true : false,
        })
        fetch(constant.BASE_URL + "all-tips?"
            + new URLSearchParams({
                dataDeleted: dataDeleted,
            }),
            {
                method: 'GET'
            }
        )
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        allItems: !_.isEmpty(result) ? result : [],
                    });
                    this.showAll(false);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
                
            )
    }
    onDelete(id, type) {
        fetch(constant.BASE_URL + `${type}/delete/${id}/`
            // + new URLSearchParams({
            //     type: type,
            //     id: id
            // }
            // )
            ,
            {
                method: 'POST',
                // params: { 
                //   typeUpdate: this.state.typeUpdate,
                //   id: this.state.empInfo.index }
                // }
            }
        )
        // reload browser after save
        // window.location.replace("http://" + window.location.host);
    }
    onRestore(id, type) {
        
        fetch(constant.BASE_URL + `${type}/restore/${id}/`
            // + new URLSearchParams({
            //     type: type,
            //     id: id
            // })
            ,
            {
                method: 'POST',
            }
        )
         // reload browser after save
        // window.location.replace("http://" + window.location.host);
    }
    setOpen(idCollapse) {
        var collapse = document.getElementById(`collapse${idCollapse}`);
        if (collapse.style.display === 'none') {
            collapse.style.display = 'block';
        } else {
            collapse.style.display = 'none';
        }
    }
    showAll(show) {
        var display = show ? 'block' : 'none';
        this.state.allItems.map((item) => {
            var collapseClass = document.getElementById(`collapse${item.categoryMaster._id}`);
            collapseClass.style.display = display;
        })

    }
    handleKeyDown = (e, url) => {
        if (e.key === 'Enter') {
            window.location.replace("http://" + window.location.host + url);
        }
    }

    render() {
        const { error, isLoaded, allItems } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div>
                    <Spinner animation="border" variant="primary" />
                </div>
                // <div>Loading...</div>
            );
        } else {
            const listTips = !_.isEmpty(allItems) ? allItems.map((item) => {
                var classDeleted = (_.isNull(item.categoryMaster.deteteTime)||item.categoryMaster.deteteTime === undefined) ? "not-detete" : "deteted"
                return (
                    <div>


                        <div className={`master-category-name ${classDeleted}`}

                        >  <button className='buton-transparent'
                            onClick={() => {
                                this.setOpen(item.categoryMaster._id)
                            }
                            } ><CaretDown /> </button>
                            {item.categoryMaster.name}

                            <Link className='link-icon' to={`create-category?type=sub&id-parent=${item.categoryMaster._id}`}><PlusCircle class='icon-inlink' /></Link>
                            <Link className='link-icon' to={`create-category?type=master&id=${item.categoryMaster._id}`}><PencilSquare class='icon-inlink' /></Link>
                            {this.state.showDeleteBtn && (
                                <button className='buton-transparent' onClick={() => this.onDelete(item.categoryMaster._id, 'categorymasters')}><Trash /></button>
                            )}

                            {this.state.showDeleteBtn && _.isEqual(classDeleted, "deteted") && (
                                <button className='buton-transparent' onClick={() => this.onRestore(item.categoryMaster._id, 'categorymasters')}><ArrowCounterclockwise /></button>
                            )}
                        </div>
                        <div id={`collapse${item.categoryMaster._id}`}>
                            {item.subCategory.map(sub => {
                                var classDeleted = (_.isNull(sub.deteteTime)||sub.deteteTime === undefined) ? "not-detete" : "deteted"
                                return (
                                    <div>
                                        <div className={`sub-category-name ${classDeleted}`}>{sub.name}
                                            <Link className='link-icon' to={`create-tip?id-parent=${sub._id}`}><PlusCircle class='icon-inlink' /></Link>
                                            <Link className='link-icon' to={`create-category?type=sub&id=${sub._id}`}><PencilSquare class='icon-inlink' /></Link>
                                            {this.state.showDeleteBtn && (
                                                <button className='buton-transparent' onClick={() => this.onDelete(sub._id, 'subcategories')}><Trash /></button>
                                            )}
                                            {this.state.showDeleteBtn && _.isEqual(classDeleted, "deteted") && (
                                                <button className='buton-transparent' onClick={() => this.onRestore(sub._id, 'subcategories')}><ArrowCounterclockwise /></button>
                                            )}
                                        </div>
                                        {sub.note.map(tip => {
                                            var classDeleted = (_.isNull(tip.deteteTime)||tip.deteteTime === undefined) ? "not-detete" : "deteted"
                                            return (
                                                <div>
                                                    <div className={`tip-detail-name`}
                                                    ><Link className={`link-icon ${classDeleted}`} to={`view-tip?id=${tip._id}`}>{tip.name}</Link>
                                                        <Link className='link-icon' to={`create-tip?id=${tip._id}&id-parent=${sub._id}`}><PencilSquare class='icon-inlink' /></Link>
                                                        {this.state.showDeleteBtn && (
                                                            <button className='buton-transparent' onClick={() => this.onDelete(tip._id, 'notes')}><Trash /></button>
                                                        )}
                                                        {this.state.showDeleteBtn && _.isEqual(classDeleted, "deteted") && (
                                                            <button className='buton-transparent' onClick={() => this.onRestore(tip._id, 'notes')}><ArrowCounterclockwise /></button>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        }
                                        )}
                                    </div>)
                            }
                            )}
                        </div>
                    </div>)

            }
            ) : null;
            return (

                <div>
                    <div className='right-block'>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search"
                                //   aria-label="Recipient's username"
                                //   aria-describedby="basic-addon2"
                                onChange={e => this.setState({ strSearch: e.target.value })}
                                onKeyDown={e => this.handleKeyDown(e, `/search?searchStr=${this.state.strSearch}`)}
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                <Link to={`search?searchStr=${this.state.strSearch}`}>Search</Link>
                            </Button>
                        </InputGroup>
                    </div>
                    <Button variant="success" onClick={() => this.showAll(true)}>Show all</Button>
                    <Button variant="success" onClick={() => this.showAll(false)}>Close all</Button>
                    <Button variant="success" onClick={() => this.getAllData(true)}>Manage Data</Button>
                    <Button variant="success" onClick={() => this.getAllData(false)}>Home page</Button>
                    <br /><br />
                    <div className="frame">
                        {listTips}
                    </div>
                    <br />
                    <button ><Link to={`create-category?type=master`}><PatchPlus />New Master Tip</Link></button>

                </div>
            );
        }
    }
}

export default HomePage;