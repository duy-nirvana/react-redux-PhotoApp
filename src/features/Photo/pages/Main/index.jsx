import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Images from 'constants/images';
import Banner from 'components/Banner';

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 👌" backgroundUrl={Images.BANANA_BG} />

      <Container>
        <Link to="./photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;