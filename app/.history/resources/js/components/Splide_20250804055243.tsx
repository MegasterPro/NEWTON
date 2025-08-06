import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '../../css/slider.css';

export default function SplideSlider() {
  return (
    <div><h2>E</h2>
        <div className="slider-wrapper">
      <Splide
        aria-label="Galerie responsive"
        options={{
          rewind: true,
          perPage: 1.5,
          gap: '1.5rem',
          breakpoints: {
            768: {
              perPage: 0.5,
              gap: '1rem',
            },
            480: {
              perPage: 0.5,
              gap: '0.5rem',
            },
          },
        }}
      >
        {['cc.png', 'bb.png', 'interieur.avif', 'lolo.avif'].map((img, index) => (
          <SplideSlide key={index}>
            <img src={`images/${img}`} alt={`Image ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
    </div>
  );
}
