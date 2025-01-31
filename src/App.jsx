import React from "react";
import { motion, useScroll } from "motion/react";

const App = () => {
  const scrollYProgress = useScroll().scrollYProgress;
  console.log(scrollYProgress);

  return (
    <div className="h-full w-full bg-zinc-900 text-white text-center p-20 font-mono">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-red-500 w-full h-3 fixed top-0 left-0 origin-left"
      ></motion.div>
      <h2 className="text-4xl font-bold mb-8">Wanijya Private Limited</h2>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        facilis rem temporibus autem repudiandae delectus ea dolore, fuga
        assumenda doloremque sed rerum quisquam quam sunt dignissimos veritatis
        ipsum a accusantium omnis modi quia. Et odit quibusdam accusantium
        soluta! Libero quisquam velit aliquid id! Minus fuga asperiores nostrum!
        Quos natus sed dolorum accusantium perspiciatis, mollitia aut laborum
        aliquid quam nobis itaque sequi eos eaque, quisquam corrupti quae
        beatae. Molestias sit quas, voluptatem fuga eligendi accusantium
        expedita eum, recusandae pariatur totam iste sunt repellendus minus
        autem, adipisci quia ducimus. Repellendus aspernatur minus assumenda
        mollitia quis sit amet, nihil, eveniet vitae consectetur explicabo.
        Nihil quibusdam amet repellat vitae quam molestiae porro cupiditate rem
        incidunt debitis! Animi, ex maiores, at veniam suscipit mollitia
        provident exercitationem commodi veritatis dolorem accusamus sequi
        officia et excepturi? Amet et voluptatum repellat impedit quae commodi
        odit neque distinctio veritatis. Veritatis nesciunt sed fugit placeat,
        at reiciendis saepe, accusamus a fugiat repellat asperiores vero!
        Blanditiis dicta perferendis sit tempore neque a, id veniam esse placeat
        similique optio dolore expedita dolores, odit velit assumenda quidem!
        Ex, autem iusto voluptatum quibusdam ab cupiditate labore quas quia ipsa
        cum in incidunt distinctio repellat, recusandae repellendus aliquid sed
        vel dolor, quaerat beatae. Ex, possimus!
        <br />
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolore
        officiis autem distinctio nesciunt, voluptatibus consequuntur iure
        recusandae fugiat rerum reprehenderit dolorum odio, voluptate ab quae
        necessitatibus culpa ipsa debitis qui. Repellat ea perferendis
        temporibus, pariatur commodi minima labore fugiat id mollitia minus,
        esse maiores neque harum laboriosam, tenetur debitis quisquam
        laudantium. Explicabo, non molestias. Suscipit necessitatibus obcaecati
        modi dolorem ex minus iste, error impedit, facere sint quidem? Delectus
        similique corrupti temporibus asperiores a dolores eveniet? Fugiat
        debitis cum maiores perferendis labore rem vitae error quae ratione
        veritatis eum nam officia voluptatibus magnam ipsam quidem, hic ad
        natus? Ratione nulla, ipsum necessitatibus velit, sapiente ad veniam
        ipsa blanditiis aut repudiandae voluptatum, iure fugit! Animi autem
        maiores ipsa nemo possimus ad molestiae eaque? Nisi cumque animi ab
        velit expedita debitis dolorem cupiditate similique ipsa inventore amet
        error fugiat quae autem nemo fuga, ad natus vero eligendi consequatur,
        voluptate iste ex. Aperiam fugiat ipsa suscipit voluptatum, praesentium
        ratione doloremque soluta assumenda iure voluptas exercitationem saepe,
        fuga, asperiores beatae? Ipsum illum amet labore laboriosam suscipit ea
        consequuntur at doloribus quaerat expedita alias, fuga iste eos aut
        inventore? Tempore laboriosam optio saepe dolor exercitationem
        temporibus harum libero illum delectus distinctio. Rerum, neque? Quod,
        qui.
        <br /> <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        excepturi aliquid similique nemo iste, illo autem consequuntur labore
        nesciunt neque! Natus nostrum animi, mollitia facilis sit eum. Rem
        corporis minima voluptatibus modi vero esse iusto harum dicta commodi,
        ab facilis sed aspernatur quisquam veniam. Nostrum error quaerat tempore
        consequatur nihil et enim, perspiciatis illum maxime laudantium soluta,
        voluptatum quo velit corrupti mollitia inventore, minus voluptate in
        odio dolores corporis eaque officia! Itaque perferendis debitis
        consectetur hic dolores sint laborum quas nam qui doloremque! Dolores
        deleniti ipsam at nobis, fugiat ad voluptas. Quasi repellat quod natus
        illo voluptatibus aspernatur id cupiditate, magnam atque quae harum
        praesentium at. Ratione velit ipsum et quas ea distinctio neque modi
        eligendi quasi tempore ut alias labore provident voluptate quis
        dignissimos numquam aut necessitatibus amet veniam, cum cupiditate
        voluptatum fugit. Amet recusandae ducimus doloremque consequuntur sit
        repellat perferendis asperiores culpa, officiis officia laudantium ipsum
        pariatur nostrum assumenda magni? Rerum earum sapiente eaque neque at
        aperiam possimus omnis libero debitis cupiditate ipsum vero itaque,
        ratione ex quisquam quasi a voluptates iusto non consectetur repellat
        suscipit unde voluptatem! Molestias nulla libero dolorem harum
        temporibus corrupti, suscipit iste, minima repellendus et alias quod
        atque dolore quae ratione dignissimos. Doloremque!
      </p>
    </div>
  );
};

export default App;
