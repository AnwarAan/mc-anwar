import profile from "../../assets/images/profile.png";
import cv from "../../assets/files/cv.pdf";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className="flex justify-around items-center home">
        <div>
          <h1>Muchamad Choirul Anwar</h1>
          <h2>Web Developer</h2>
          <table>
            <tr>
              <td>Address</td>
              <td>Jl. Bintara 12A, Bekasi</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>anwaraan998@gmail.com</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>+6281284452877</td>
            </tr>
            <tr>
              <td>Hobby</td>
              <td>Play piano</td>
            </tr>
          </table>
          <div className="mt-20">
            <a href={cv}>
              <input type="button" value="Clik CV" />
            </a>
          </div>
        </div>
        <div>
          <img className="w-96" src={profile} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Home;
