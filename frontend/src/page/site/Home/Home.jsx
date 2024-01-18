import React, { useContext, useEffect } from 'react'
import MainContext from '../../../context'
import { Helmet } from 'react-helmet'
import './Home.scss'
import Card from '../../../component/Card/Card'
const Home = () => {
    const {data,setData,setError,search,setSearch,searchItems,addToWishlist}=useContext(MainContext)

  

  return (
<>
<Helmet><title>Home</title></Helmet>
<div className='sectionOne'>
  <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" alt="" />
  <span className='get'>Get your <p>Education</p> today</span>
</div>

<div className='sectionSecond'> 
<hr />
<div className='input'>
<input
        type="text"
        value={search}
        placeholder='Search product'
        onChange={(e) => setSearch(e.target.value)}
      />
      <h4>Popular Courses</h4>
</div>
  <div className='crud'>
 
   {searchItems.map((item,index)=>(
    <Card item={item} index={index}/>
   ))}
  </div>
</div>


<div className='sectionThird'>
  <div className='leftDiv'>
    <h3>Register now and get a discount 50% discount until 1 January</h3>
    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor <br /> nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. <br />
     Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
    <button>Register Now</button>
    </div>

  <div className='rightDiv'>
    <h2>Search for your course</h2>
    <form action="">
      <input className='inputOne' type="text" placeholder='Course Name...' /> <br />
      <input type="text" placeholder='Category...' /> <br />
      <input type="text" placeholder='Degree...' /> <br />
      <button>Search Course</button>
    </form>
  </div>
</div>


<div className='ourServices'>
  <hr />
<h2>Our Services</h2>
<div className='servicesCards'>
  <div className='serviceCard'>
    <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
    <h3>Online Courses</h3>
    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum <br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi <br /> malesuada, finibus tortor fermentum.</p>
  </div>

  <div className='serviceCard'>
    <img src="https://preview.colorlib.com/theme/course/images/exam.svg" alt="" />
    <h3>Indoor Courses</h3>
    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum <br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi <br /> malesuada, finibus tortor fermentum.</p>
  </div>

  <div className='serviceCard'>
    <img src="https://preview.colorlib.com/theme/course/images/books.svg" alt="" />
    <h3>Amazing Library</h3>
    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum <br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi <br /> malesuada, finibus tortor fermentum.</p>
  </div>

  <div className='serviceCard'>
    <img src="https://preview.colorlib.com/theme/course/images/professor.svg" alt="" />
    <h3>Exceptional Professors</h3>
    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum <br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi <br /> malesuada, finibus tortor fermentum.</p>
  </div>

  <div className='serviceCard'>
    <img src="https://preview.colorlib.com/theme/course/images/blackboard.svg" alt="" />
    <h3>Top Programs</h3>
    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum <br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi <br /> malesuada, finibus tortor fermentum.</p>
  </div>

  <div className='serviceCard'>
    <img src="https://preview.colorlib.com/theme/course/images/mortarboard.svg" alt="" />
    <h3>Graduate Diploma</h3>
    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum <br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi <br /> malesuada, finibus tortor fermentum.</p>
  </div>
</div>
</div>

<div className='upcoming'>
<hr />
<h2>Upcoming Events</h2>
<div className='upcomingCard'>
<p className='bigP'><b className='bold'>07</b> <br /> JANUARY</p>
<div className='upcomingCardText'>
  <h3>Student Festival</h3>
  <b>Grand Central Park</b>
  <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula <br /> vel nunc. Proin quis mi malesuada, finibus tortor.</p>
</div>
<img src="https://preview.colorlib.com/theme/course/images/event_1.jpg" alt="" />
</div>

<div className='upcomingCard'>
<p className='bigP'><b className='bold'>07</b> <br /> JANUARY</p>
<div className='upcomingCardText'>
  <h3>Student Festival</h3>
  <b>Grand Central Park</b>
  <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula <br /> vel nunc. Proin quis mi malesuada, finibus tortor.</p>
</div>
<img src="https://preview.colorlib.com/theme/course/images/event_2.jpg" alt="" />
</div>

<div className='upcomingCard'>
<p className='bigP'><b className='bold'>07</b> <br /> JANUARY</p>
<div className='upcomingCardText'>
  <h3>Student Festival</h3>
  <b>Grand Central Park</b>
  <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula <br /> vel nunc. Proin quis mi malesuada, finibus tortor.</p>
</div>
<img src="https://preview.colorlib.com/theme/course/images/event_3.jpg" alt="" />
</div>
</div>
</>
       
   
  )
}

export default Home