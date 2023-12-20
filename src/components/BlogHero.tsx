import authorImg from "../assets/png/author-img.png";
import blogImg from "../assets/png/blog-img-1.png";

const BlogHero = () => {
  return (
    <>
      <div className="container xl:max-w-[1100px] pt-16 xl:pt-[99px] pb-12 px-4 sm:px-8 xl:px-36 mx-auto">
        <button className="text-sm font-Roboto text-white_off_3 font-medium px-[17px] pt-[3px] pb-1 bg-light_blue rounded-[3px]">
          Food Theory
        </button>
        <h4 className="text-3xl sm:text-4xl lg:text-6xl	font-bold font-Merriweather text-black pt-6 lg:pt-3 !leading-[120%]">
          What I Learned About Life and Food Backpacking Around Greece
        </h4>
        <p className="text-sm font-Merriweather text-dark_gray pt-2">
          Aug 1, 2021 • 7 min read
        </p>
        <img src={blogImg} alt="blog-img-1" className="pt-4" />
        <div className="flex items-center pt-3 lg:pt-5">
          <img src={authorImg} alt="author-img" />
          <p className="text-sm font-bold font-Merriweather text-black ps-4">
            George Costanza
          </p>
        </div>
        <p className="text-light_black text-2xl lg:text-3xl font-Roboto font-medium pt-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui
          diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare
          nulla risus id fames nascetur urna. Eros in neque tincidunt.
        </p>
        <p className="text-light_black text-xl font-Roboto pt-4 sm:pt-8">
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
        <div className="p-5 sm:p-9 mt-7 sm:mt-10 bg-white_off_2 rounded-[7px] border border-[#ddd]">
          <h5 className="text-2xl font-bold font-Merriweather text-black">
            In this article
          </h5>
          <ol className="list-decimal ps-5 pt-4">
            <li className="text-lg font-Merriweather text-light_brown underline custom__offset">
              How to travel without spending a dime
            </li>
            <li className="text-lg font-Merriweather text-light_brown underline custom__offset pt-4">
              Get the most out of your credit card reward points
            </li>
            <li className="text-lg font-Merriweather text-light_brown underline custom__offset pt-4">
              Why you don’t need more than 3 pieces of clothing
            </li>
          </ol>
        </div>
        <p className="text-light_black text-xl font-Roboto pt-7 sm:pt-10">
          Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut
          erat in. Et nulla a magna amet, amet. Sodales malesuada laoreet
          bibendum neque amet turpis non. Ac arcu lacus turpis elementum
          imperdiet. Euismod purus, libero scelerisque vitae, libero fermentum
          urna, nunc.
        </p>
        <div className="pt-7">
          <h4 className="text-2xl font-bold font-Merriweather text-light_brown">
            How to travel without spending a dime
          </h4>
          <p className="text-light_black text-xl font-Roboto pt-5">
            Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate
            donec enim sed ornare scelerisque. Sollicitudin orci leo egestas
            fermentum platea a imperdiet nisl. Velit placerat nibh nisl ut
            feugiat. Egestas id egestas nunc mattis. Sed mauris vitae commodo
            pharetra, vestibulum rhoncus natoque.
          </p>
          <p className="text-light_black text-xl font-Roboto pt-5">
            Leo id aliquet potenti enim sed maecenas sed ornare. Risus nam
            mauris etiam nibh maecenas nibh interdum mauris suspendisse.
            Volutpat, enim interdum facilisi mauris vitae id. Vel malesuada sit
            etiam dolor. Ullamcorper habitant vitae, nec pretium ullamcorper
            viverra integer praesent tincidunt. At erat sagittis tellus
            ultricies in a.
          </p>
        </div>
        <div className="pt-7">
          <h4 className="text-2xl font-bold font-Merriweather text-light_brown">
            Get the most out of your credit card reward points
          </h4>
          <p className="text-light_black text-xl font-Roboto pt-5">
            Massa, libero morbi morbi sed non sed. In et neque lectus ultricies
            leo eros. Auctor in elementum accumsan malesuada gravida neque
            cursus pellentesque nunc. Dui nullam odio neque varius massa
            praesent. Neque, porta vel, morbi nulla at tincidunt. Neque, et
            ultrices duis fermentum, tincidunt sem sed. Erat accumsan dui enim
            nisl morbi feugiat.
          </p>
          <p className="text-light_black text-xl font-Roboto pt-5">
            Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu sed.
            Nibh non semper amet sit hac tristique orci. Quis velit vitae amet
            magnis nec in nunc. Amet vitae id cras nibh. Sed ipsum, lacinia in
            sit vitae. Duis luctus convallis risus purus sollicitudin purus id
            eu. Faucibus mattis eget ullamcorper eu suspendisse elit elit lacus
            purus. Tortor felis.
          </p>
        </div>
        <div className="pt-7">
          <h4 className="text-2xl font-bold font-Merriweather text-light_brown">
            Why you don’t need more than 3 pieces of clothing
          </h4>
          <p className="text-light_black text-xl font-Roboto pt-5">
            Massa aenean cursus nulla urna dui, fermentum cursus in facilisis.
            Vulputate euismod vestibulum dolor in elementum quis quis. Erat
            proin in eget arcu tellus ut ultrices. Quis maecenas ullamcorper
            ante sit leo placerat. Quisque dictum laoreet eget quam leo tortor
            scelerisque sit nullam. Lacus, tortor, aenean mattis lobortis
            lacinia mauris. Viverra nulla.
          </p>
          <p className="text-light_black text-xl font-Roboto pt-5">
            Sed pellentesque quam lorem urna. Mauris donec molestie eget massa
            pellentesque facilisis netus mauris. Magna eget eget sollicitudin at
            faucibus odio. At augue sit nisi et metus cras dignissim vel,
            tortor. Maecenas molestie consequat cursus posuere ultrices
            facilisis hac bibendum semper. Sed lorem vel donec proin. Volutpat
            aliquet rhoncus sit et.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
