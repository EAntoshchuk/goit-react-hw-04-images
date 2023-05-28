// import { Component } from 'react';
// // import css from './ImageChanger.module.css';

// export default class ImageChanger extends Component {
//   state = {
//     imageIndex: 0,
//   };

//   changeImageIndex = value => {
//     this.setState(state => ({ imageIndex: state.imageIndex + value }));
//   };

//   //   onNextImage = () => {
//   //     this.setState(state => ({ imageIndex: state.imageIndex + 1 }));
//   //   };

//   //   onPrevImage = () => {
//   //     this.setState(state => ({ imageIndex: state.imageIndex - 1 }));
//   //   };

//   render() {
//     const { imageIndex } = this.state;
//     const activeImage = this.props.items[imageIndex];
//     return (
//       <div>
//         <section>
//           <button
//             disabled={imageIndex + 1 === this.props.items.length}
//             // type="button" onClick={this.changeImageIndex(-1)}
//           >
//             Next image
//           </button>
//           <button
//             disabled={imageIndex === 0}

//             // type="button" onClick={this.changeImageIndex(1)}
//           >
//             Previous image
//           </button>
//         </section>
//         <p>{imageIndex + 1}</p>
//         {/* <p>
//           {this.state.imageIndex + 1}/{this.props.items.length}
//         </p> */}
//       </div>
//     );
//   }
// }
