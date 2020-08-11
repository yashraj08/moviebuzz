import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import './content.css';
import Data from '../components/data';
import Aux from '../hoc/Aux1/Aux1';
import Toolbar from '../components/navbar';
import Errors from '../components/errors';
import Spinner from '../components/spinner';
import Movie from '../components/movie';

const Content = () => {

    const [error, setError] = useState(false);
    const [datas, setData] = useState([]);
    // const [totalData, setTotaldata] = useState(0);
    const [searchValues,setsearchValues]=useState();
    const [currPage,setCurrPage] = useState(0);
    const [perPage,setPerPage] =useState(10);
    const [totalPage,setTotalPage] =useState(0);
    const [currData,setCurrData] = useState([]);
    const [type, setType] = useState(0);
    const [movieData, setMovieData] = useState({});

    async function fetchData(apiurl,page) {
         await fetch(apiurl)
            .then(res => res.json())
            .then(res => {
                setData(res.Search);
                setTotalPage(Math.ceil(res.totalResults/perPage));
                setCurrPage(page);
                

            })
            .catch(err => {

                setError(true);
                console.log(error);


            });
    }
    async function fetchedData(apiurl) {
         await fetch(apiurl)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setMovieData(res);
                console.log(movieData);
            })
            .catch(err => {

                setError(true);
                console.log(error);


            });
    }
    useEffect(() => {
        setType(0);
        setError(false);

        
    }, []);

    const handlePageClick = (e) => {
        console.log(e.selected);
         let p=e.selected+1;
         console.log(searchValues);
         const url1 = " http://www.omdbapi.com/?apikey=44cb35cd&s="+searchValues+"&page="+p;
         fetchData(url1,p);        
     }; 


    const search = (searchValue, type) => {
        setType(type);
        setsearchValues(searchValue);
        let url2;
        if (type === 1) {
        
            const url1 = " http://www.omdbapi.com/?apikey=44cb35cd&s=";
            url2 = url1.concat(searchValue);
            fetchData(url2,1);

        } else if (type === 2) {
            const url1 = " http://www.omdbapi.com/?apikey=44cb35cd&i="+searchValue+"&plot=full";
           
            fetchedData(url1);
        }


    };
    return ( 
    <Aux>
        <Toolbar search = { search }/>
         {type === 0 ? <div> Welcome </div>
                :(type === 1 ?
                    <div style = {{ backgroundColor: '#659DBD' } } > {
                        datas.map(epi => ( <
                            Data key = { epi.imdbID }
                            episode = { epi }
                            search = { search }
                            />
                         ))
                    } 
                    <div style = 
                    {{ display: 'inline-flex', backgroundColor: 'rgba(0,0,0,.03)' } } > 
                      {
                     <ReactPaginate previousLabel = { "prev" }
                                            nextLabel = { "next" }
                                            breakLabel = { "..." }
                                            breakClassName = { "break-me" }
                                            pageCount = { totalPage }
                                            marginPagesDisplayed = { 5 }
                                            pageRangeDisplayed = {5}
                                            onPageChange = { handlePageClick }
                                            containerClassName = { "pagination" }
                                            subContainerClassName = { "pages pagination" }
                                            activeClassName = { "active" }/>   
                    } 
                    </div>  
                    </div>
                :<div style = {{ backgroundColor: '#659DBD', height:'80%'}} >
                    < Movie episode = { movieData }/>
                </div>
        )
    }

    </Aux>
);
}

export default Content; 