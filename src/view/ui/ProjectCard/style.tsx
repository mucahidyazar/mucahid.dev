import styled, {css} from 'styled-components'
import {BreakpointSize} from '@/constants/index'
import {Title, Subtitle} from '../Typography'
import {Tag} from '../Tag'

{
  /* <S.ProjectCard>
<S.ProjectCardImage>
  <Image src={imageUrl} width={320} height={320} alt="" />
</S.ProjectCardImage>
<S.ProjectCardContent>
  <S.ProjectCardLeft>
    <S.ProjectCardItem>
      <S.ProjectCardLabel>Project Name</S.ProjectCardLabel>
      <S.ProjectCardText>Getir</S.ProjectCardText>
    </S.ProjectCardItem>
    <S.ProjectCardItem>
      <S.ProjectCardLabel>Technologies</S.ProjectCardLabel>
      <S.ProjectCardTags>
        <Tag>React</Tag>
        <Tag>NextJS</Tag>
        <Tag>TypeScript</Tag>
      </S.ProjectCardTags>
    </S.ProjectCardItem>
    <S.ProjectCardItem>
      <S.ProjectCardLabel>URL</S.ProjectCardLabel>
      <S.ProjectCardText>www.getir.com</S.ProjectCardText>
    </S.ProjectCardItem>
  </S.ProjectCardLeft>

  <S.ProjectCardRight>
    <S.ProjectCardItem>
      <S.ProjectCardLabel>Description</S.ProjectCardLabel>
      <S.ProjectCardText>
        How are you doin you having fun and like my website. I wanted to
        welcome you. How are you doing? Hopving fuaving fun and like my
        website. I wanted to welcome you. How are you doing? u having fun
        and like my website. I wanted to welcome you.How are you doin you
        having fun and like my website. I wanted to welcome you. How are
        you doing? Hopving fuaving fun and like my website. I wanted to
        welcome you. How are you doing? u having fun and like my website.
        I wanted to welcome you.How are you doin you having fun and like
        my website.
      </S.ProjectCardText>
    </S.ProjectCardItem>
  </S.ProjectCardRight>
</S.ProjectCardContent>
</S.ProjectCard> */
}

const ProjectCard = styled.div``
const ProjectCardImage = styled.div`
  margin-bottom: 0.5rem;
`
const ProjectCardContent = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProjectCardLeft = styled.div`
  width: 22%;
`
const ProjectCardRight = styled.div`
  width: 76%;
`
const ProjectCardItem = styled.div`
  margin-bottom: 0.5rem;
`
const ProjectCardLabel = styled(Subtitle)``
const ProjectCardText = styled.div``
const ProjectCardTags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.2rem;
`

export {
  ProjectCard,
  ProjectCardImage,
  ProjectCardContent,
  ProjectCardLeft,
  ProjectCardRight,
  ProjectCardItem,
  ProjectCardLabel,
  ProjectCardText,
  ProjectCardTags,
}
