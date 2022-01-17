import React from 'react'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import {
  Introduction,
  SectionHeader,
  Welcome,
  SectionSlider,
  AboutWelcome,
} from '@/components/index'
import {
  Badge,
  Card,
  PostCard,
  Input,
  Textarea,
  Button,
  ProjectCard,
  Title,
  Subtitle,
} from '@/ui/index'
import * as S from './style'

const ArticleContainer: NextComponentType = () => {
  return (
    <>
      <S.Header>
        <Title level={4}>Improve yourself by practising!</Title>
        <S.BottomHeader>
          <Subtitle>Written by Mucahid Yazar on November 17, 2021</Subtitle>
          <S.ShareBy>
            <Image
              width={24}
              height={24}
              src="/svgs/instagram-icon.svg"
              alt="instagram"
            />
            <Image
              width={24}
              height={24}
              src="/svgs/linkedin-icon.svg"
              alt="linkedin"
            />
            <Image
              width={24}
              height={24}
              src="/svgs/codepen-icon.svg"
              alt="codepen"
            />
            <Image
              width={24}
              height={24}
              src="/svgs/mail-icon.svg"
              alt="mail"
            />
          </S.ShareBy>
        </S.BottomHeader>
      </S.Header>
      <S.ArticleImage>
        <Image width={1440} height={540} src="/images/article.jpg" alt="mail" />
      </S.ArticleImage>
      <S.ArticleTags>
        {[
          'Css',
          'Html',
          'Javascript',
          'React',
          'Next.js',
          'Redux',
          'Sass',
          'TypeScript',
        ].map(item => (
          <Badge key={item}>{item}</Badge>
        ))}
      </S.ArticleTags>

      <S.ArticleContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        fugiat cumque voluptate aliquam minima, sapiente minus laboriosam
        facilis necessitatibus quo. Earum quo vel dolor quos. Exercitationem
        obcaecati officia, eum mollitia enim ullam architecto reiciendis dolorem
        ab veniam maiores nemo! Natus earum ea iste asperiores, explicabo eum
        aut. Saepe voluptatibus fugit nisi, reiciendis quos deserunt recusandae
        soluta doloribus! Quas, nihil rem! Voluptatem, ea? Doloremque itaque,
        possimus, esse consequatur cupiditate enim quisquam dolores et sed quae
        deleniti in inventore quasi nam id alias dolor aliquid maiores odit
        asperiores optio. Quas sapiente non debitis eligendi amet, ad fugit
        itaque voluptate asperiores esse id? At accusantium laboriosam
        temporibus ab mollitia modi voluptate dolor consectetur velit facere
        ipsa perferendis doloribus harum cupiditate illo, eaque ex nisi! Culpa
        dolor, vero odit possimus nulla aut fuga aspernatur nam et. Doloremque
        dolorum facere amet. Veniam facilis, rem ducimus corrupti doloremque
        corporis deserunt obcaecati! Ipsum totam nostrum commodi eveniet.
        Aspernatur odio voluptatem, unde totam in, neque id sint quo commodi
        explicabo exercitationem! Perspiciatis reiciendis cum culpa cupiditate
        eius, illum deserunt, quibusdam hic velit pariatur atque corrupti
        officiis necessitatibus odio! Asperiores quo ea, dolorum iste voluptatum
        deleniti culpa ex excepturi, soluta labore rerum minima! Debitis iste ad
        quo quas velit! Odit, magni sed. Corrupti fugiat consequuntur sapiente
        tempora aliquam delectus ad facere! Dignissimos ut aspernatur cupiditate
        corrupti reiciendis eius natus molestiae non expedita labore, amet ad
        animi ea vel voluptatem sint soluta. Aliquid quam vero doloribus cum
        provident iusto error aliquam, optio eum repellendus voluptatem nostrum
        voluptatibus quaerat temporibus numquam explicabo laboriosam. Dolorum
        hic sit esse eos rem, repellendus quos itaque consequatur iste maxime
        nemo molestiae corporis voluptates, natus ut labore explicabo quisquam
        nulla blanditiis illo, neque atque quo. In a placeat quasi deserunt
        magnam ipsum neque sint enim cum, fugiat magni iure quaerat? Officia
        libero ex perspiciatis, itaque laudantium non rem, tempora cumque quae
        quidem ut explicabo? Fugit quaerat nobis quibusdam sint ipsam minima
        maiores eum totam, delectus repudiandae, odit aspernatur maxime ab
        consectetur dolor. Excepturi iure non quo! Magni, omnis. Deserunt magni
        alias incidunt labore quam, iusto dolor corporis modi nam consequuntur
        totam autem nobis accusamus deleniti, veritatis praesentium velit unde
        tenetur sapiente! Voluptates consequatur quis eos? In numquam quibusdam
        quos aperiam repellendus, nisi accusantium incidunt, placeat ipsa
        consectetur, officiis aliquam reiciendis! Voluptas in dolore blanditiis
        adipisci, eos atque consequatur officiis dolor eveniet dicta ex aliquid
        saepe, fugit quos hic enim accusantium doloremque consequuntur
        voluptates qui iusto consectetur veniam. Non, aut sequi. Minus quod
        quibusdam similique nemo doloribus et delectus, vel beatae nam
        perferendis eaque cumque rem ex magnam enim, eos sed aliquid libero quia
        dolor mollitia corrupti! Alias, eveniet. Quam dolor quo reiciendis
        numquam. Incidunt ratione suscipit placeat in debitis autem illo nulla
        nostrum earum a corporis quos, ipsum at quasi quia reprehenderit iure
        modi, sunt odio unde. Explicabo laboriosam modi nisi? Dolore eaque iste
        aspernatur, excepturi totam consequuntur iusto consequatur quod magnam
        dignissimos, adipisci voluptatum voluptatem nisi quia, beatae iure
        praesentium nemo amet corrupti nam minima. Numquam eos at vero saepe
        eaque possimus provident aspernatur nam!
      </S.ArticleContent>
      <S.Divider />
      <SectionHeader title="Comments" subtitle="6 Comments" />
      <S.Comments>
        {[
          {
            id: 'cooment-1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias',
            date: '1 day ago',
          },
          {
            id: 'cooment-2',
            text: 'Fugiat cumque voluptate aliquam minima, sapiente minus laboriosam',
            date: '1 day ago',
          },
          {
            id: 'cooment-3',
            text: 'Facilis necessitatibus quo. Earum quo vel dolor quos. Exercitationem',
            date: '1 day ago',
          },
          {
            id: 'cooment-4',
            text: 'Obcaecati officia, eum mollitia enim ullam architecto reiciendis dolorem',
            date: '1 day ago',
          },
          {
            id: 'cooment-5',
            text: 'Ab veniam maiores nemo! Natus earum ea iste asperiores, explicabo eum',
            date: '1 day ago',
          },
          {
            id: 'cooment-6',
            text: 'Aut. Saepe voluptatibus fugit nisi, reiciendis quos deserunt recusandae',
            date: '1 day ago',
          },
        ].map(comment => (
          <Card key={comment.id} data={comment} type={2} />
        ))}
      </S.Comments>
      <S.CommentsForm>
        <Textarea />
        <Button primary>Send</Button>
      </S.CommentsForm>
    </>
  )
}

export default ArticleContainer
