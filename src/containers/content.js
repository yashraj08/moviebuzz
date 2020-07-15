import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import './content.css';
import Data from '../components/data';
import Aux from '../hoc/Aux1/Aux1';
import Toolbar from '../components/navbar';
import Errors from '../components/errors';
import Spinner from '../components/spinner';

const Content = () => {

    const [error, setError] = useState(false);
    const [episodes, setEpisodes] = useState([]);
    const [nextPage, setNext] = useState(null);
    const [prevPage, setPrev] = useState(null);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    async function fetchData(apiurl) {
        const res = await fetch(apiurl)
            .then(res => res.json())
            .then(res => {

                setEpisodes(res.results);
                setNext(res.info.next);
                setPrev(res.info.prev);
                setTotalPage(res.info.pages);

            })
            .catch(err => {

                setError(true);
                console.log(error);


            });
    }
    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/episode/");
        //console.log(episodes);
    }, []);
    const search = searchValue => {

        const url1 = "https://rickandmortyapi.com/api/episode/?name=";
        let url2 = url1.concat(searchValue);
        fetchData(url2);

    };
    const handlePageClick = (e) => {

        setPage(e.selected);
        console.log(e.selected);
        if (e.selected === 1)
            fetchData(nextPage);
        else
            fetchData(prevPage);

    };

    //    if( typeof episodes === 'undefined' ){
    //        return (
    //         <Aux>
    //         <Toolbar search={search}/>
    //            <Errors/>
    //         </Aux>
    //        )
    //    }
    return ( <
        Aux >
        <
        Toolbar search = { search }
        /> {
            typeof episodes === 'undefined' ? ( <
                Errors / >
            ) : ( < div style = {
                    { backgroundColor: '#659DBD' } } > {
                    episodes.map(epi => ( <
                        Data key = { epi.id }
                        episode = { epi }
                        />
                    ))
                } <
                div style = {
                    { display: 'inline-flex', backgroundColor: 'rgba(0,0,0,.03)' } } >
                <
                ReactPaginate previousLabel = { "prev" }
                nextLabel = { "next" }
                breakLabel = { "..." }
                breakClassName = { "break-me" }
                pageCount = { totalPage }
                marginPagesDisplayed = { 2 }
                pageRangeDisplayed = { 2 }
                onPageChange = { handlePageClick }
                containerClassName = { "pagination" }
                subContainerClassName = { "pages pagination" }
                activeClassName = { "active" }
                />  <
                /div> <
                /div>

            )
        }

        <
        /Aux>
    );
}
export default Content;