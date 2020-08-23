import React, { useRef } from 'react'
import styled from 'styled-components'

import { Sticky } from '@components/sticky/sticky'

import { eventDispatcher } from '@utils/event-dispatcher/event-dispatcher'

const StyledTest = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  background: red;
`

const Home = () => {
  const testEl = useRef(null)

  const mouseEnterHandler =  ({ target }) => {
    eventDispatcher(document, 'cursor', {
      label: 'test',
      size: 5,
      isHovering: true,
    })
  }

  const mouseLeaveHandler =  ({ target }) => {
    console.log('zzz')
    eventDispatcher(document, 'cursor', {
      label: '',
      size: 'Large',
      isHovering: false,
    })
  }

  return (
    <div>
      <h1
        // onMouseLeave={mouseLeaveHandler}
      >
        Simple Storybook Example
      </h1>
      <Sticky
        isHoverable
        label="test"
      >
        test1
      </Sticky>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae recusandae maxime itaque officiis rem totam alias, non error blanditiis quibusdam laudantium impedit deserunt saepe ut facere beatae dignissimos distinctio nobis.
      <Sticky>
        test1
      </Sticky>
      Consequuntur amet quisquam impedit laborum blanditiis fugiat magni eius cupiditate ex atque, mollitia tenetur pariatur iste? Est quod delectus illum eius atque, debitis aspernatur ut error neque iure? Facere, dicta.
      Deleniti distinctio provident cumque asperiores hic beatae, at sint alias doloremque aspernatur fuga ex dolorem quas labore nulla voluptatum minima laborum cupiditate quod illo quis assumenda voluptas possimus repellendus? Laborum.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deserunt omnis consequuntur, necessitatibus doloremque fugiat, aliquam illum dignissimos et excepturi sunt dolore autem, impedit repellat ipsam maxime asperiores quibusdam unde?
      Inventore velit rem quasi illum possimus laudantium aut, eius laboriosam molestiae aspernatur eveniet dolorum? Est magnam cupiditate quam unde culpa a, nostrum reprehenderit perferendis minima sint modi ratione sed error.
      Rerum dolore ex accusamus possimus tenetur consequatur, deleniti impedit obcaecati, omnis porro mollitia nisi consequuntur commodi! Tempore, illo ut. Sint dolorum ex est, impedit vitae eum! Id corrupti deserunt assumenda.
      Similique ipsum tempore nihil odio quis commodi optio quam voluptas cupiditate cum adipisci veniam atque a quos beatae non, reiciendis quasi aliquam nemo consectetur ex sit! Error molestias ut facilis?
      Consequuntur et sunt facere impedit hic deleniti fugit natus itaque rerum non alias, quas dolorum veritatis incidunt, porro aut enim aliquam tempora asperiores! Architecto quos ipsa nesciunt voluptate molestiae earum.
      Consectetur deserunt iusto dicta blanditiis obcaecati, error laudantium placeat quaerat quasi explicabo tempore corporis perferendis doloribus assumenda nostrum quos facilis est cumque et in quis quidem. Deleniti soluta reprehenderit a?
      Delectus quibusdam illo, commodi dicta vel nulla unde illum architecto suscipit officiis itaque dolores recusandae earum quis totam ea blanditiis dignissimos corrupti? Minus porro, ducimus praesentium veritatis ipsa laborum necessitatibus?
      Eius quisquam cupiditate eligendi, totam magnam voluptatum impedit numquam maiores. Facere quasi voluptates adipisci quo praesentium laboriosam earum voluptate rerum tempora distinctio. Consequuntur, possimus. Nobis assumenda nesciunt recusandae. Optio, aspernatur?
      Magnam sapiente asperiores quos officia ipsam nam necessitatibus quidem minima quod animi! Quod rem alias quae beatae aliquam qui odit, cupiditate nobis voluptatem non facere earum quas illum impedit hic?
      Aliquam quaerat nisi iure at praesentium. Delectus vel iure voluptates sint laudantium quod doloremque praesentium architecto tempora consequatur, provident omnis possimus? Nostrum amet voluptates veritatis quia nesciunt necessitatibus dolor. Unde?
      Similique modi laborum non, a, omnis doloribus odio pariatur, culpa sequi officiis suscipit sed reprehenderit laudantium fugit? Perspiciatis facere optio assumenda sequi. Dolores aspernatur consectetur magnam voluptate reiciendis voluptatem ea.
      Sequi magni cumque saepe numquam illum neque non sapiente consequuntur vitae dolorem esse, exercitationem temporibus. Dolorum, aperiam! Fugit tempore veritatis eos placeat iusto, porro ipsa mollitia. Optio repudiandae mollitia temporibus?
      Veritatis ad excepturi dicta, velit quaerat error omnis molestias. Officiis ab repellendus soluta delectus deleniti placeat nemo omnis, inventore alias officia assumenda porro aperiam! Tenetur laborum temporibus necessitatibus adipisci consequatur?
      Ratione non officia illum repellendus, suscipit corrupti quas possimus cupiditate. Officia est odio itaque sunt illum repudiandae temporibus quae, nobis molestias omnis dolor beatae, dignissimos, vero sequi explicabo rerum. Quibusdam?
      Facilis neque maiores accusantium ipsa quasi suscipit, quisquam, nulla dolorem nemo explicabo, quia placeat iusto at saepe pariatur quas eligendi officiis. Deserunt pariatur accusamus optio eveniet quas magnam ut natus.
      Vitae dicta aliquam alias possimus ipsa non rem architecto, eligendi inventore reiciendis nisi dolorum voluptatibus quod debitis laboriosam fugit, corporis consectetur atque adipisci fuga impedit maxime incidunt nam? Nam, perferendis?
      Ea ducimus, minus architecto voluptates est doloremque magni. Rem praesentium mollitia accusamus. Similique dicta aut harum magnam sint nobis repellat porro delectus, pariatur deleniti! Eos doloribus totam ipsa! Alias, nihil?
      Quae reprehenderit, voluptates voluptatem repudiandae totam modi fugiat sit magni. Autem beatae alias incidunt ad dolorem. Voluptatibus aperiam, possimus dicta beatae esse quasi maiores, impedit maxime culpa, at magni quis?
      Quasi earum velit at provident nesciunt eius ratione explicabo ad numquam est! Debitis sequi consequatur ab possimus reiciendis, aut, explicabo, ducimus accusamus nesciunt id illum. Repellendus ad quo inventore natus.
      Qui, commodi molestias. Aperiam labore quisquam magni corporis perspiciatis, sapiente cupiditate eveniet porro aut velit quo facere qui eligendi libero ullam ducimus necessitatibus? Dolore vel et consequuntur, facere quaerat mollitia.
      Asperiores, autem accusantium tempore ipsam a deserunt numquam dolorem excepturi rerum quaerat? Culpa corporis dolore distinctio tenetur quas, ratione obcaecati, debitis nam quis perferendis veniam eveniet. Aperiam ab magni ex!
      Distinctio cumque ea iure pariatur repellendus. Repellendus sapiente officiis minus ratione nostrum cum odit optio dolorum qui aut. Fugit iste aperiam dolorem iure! Omnis aut dolores quibusdam, totam porro voluptatum!
      Debitis nemo nisi illum. Quisquam, laboriosam. Possimus sed dolorem autem, minus amet nobis nulla cupiditate blanditiis totam consectetur est numquam consequatur quasi fugiat rem repudiandae iste quia magnam odit. Voluptas.
      Voluptatum nobis alias quaerat maxime. Odit ratione quibusdam fugiat numquam assumenda obcaecati perferendis sit consequatur. Recusandae, illo eaque. Quasi iste accusamus autem nam laborum, unde dolorem soluta sunt consequuntur voluptatibus?
      Vitae, suscipit quam! Explicabo quisquam autem minus ipsa quod! Dolorum inventore nostrum, deleniti rem eaque veniam perspiciatis delectus nulla voluptatum illum optio, quidem fuga eum dignissimos iusto reprehenderit esse libero?
      Beatae corporis expedita et voluptatibus fugit nemo ex dolore ad veritatis quibusdam animi delectus accusamus cum quisquam, aliquam non! Quos, ducimus. Aperiam facere nobis, atque impedit iste odio obcaecati cumque?
      Pariatur explicabo asperiores ex sequi voluptatum mollitia voluptate rerum assumenda totam sapiente, error iure omnis consectetur laudantium ea excepturi alias quam veniam soluta id ad dolorem consequuntur reprehenderit modi! Dolor?
      Dicta, laborum mollitia fuga aliquam tempore ipsum eum cupiditate blanditiis at ex exercitationem facilis labore optio tempora eaque et temporibus aut dolores iure! Commodi delectus unde iure vero optio minima?
      Facere sit aliquam, deserunt necessitatibus nesciunt placeat eaque laboriosam nihil sint provident exercitationem incidunt cum assumenda tempora ad voluptate qui sed accusantium? Tempora, eveniet adipisci ducimus architecto similique dolore vel?
      Optio ab, mollitia quam, maxime commodi iure ex officia blanditiis asperiores, tenetur neque nesciunt quas. Dicta necessitatibus deserunt tempora alias quo quos, possimus, reprehenderit repellat ducimus odio quia pariatur atque?
      Accusamus placeat fugit quia aspernatur voluptate? Eius obcaecati qui quibusdam id, nostrum hic officia optio ab eligendi tenetur amet culpa iste illum minima enim! Aliquam excepturi ipsa sapiente quos iusto?
      Mollitia, ad sequi hic praesentium, dolore saepe nostrum similique quod, adipisci sit soluta laboriosam iure recusandae placeat! Ex vitae optio, deleniti doloribus qui minima, a cupiditate ab laborum repellat fugiat?
      Porro consequatur error aspernatur delectus dolorem impedit nesciunt, est accusantium expedita officia voluptatibus veritatis praesentium inventore vitae, quos doloribus deleniti obcaecati ut enim et vero recusandae ipsum eveniet iusto? Blanditiis.
      Accusantium inventore amet nesciunt cumque repudiandae, facilis quaerat architecto sunt officiis eos facere perferendis rem dolore, commodi doloremque qui tenetur id dolor eius, nulla laborum? Dolorum assumenda quasi recusandae nulla.
      Ex, vitae illo unde voluptates doloribus dolorum vel reprehenderit, tenetur voluptatum molestiae alias atque voluptas corporis. Nisi molestias fugit eligendi sequi possimus vel? Error sapiente fuga iusto quidem nam laudantium.
      Vero tempora ratione, laudantium sequi nam explicabo quisquam dignissimos iusto facilis adipisci assumenda quidem rerum dolores quasi in quos magni voluptates omnis mollitia aspernatur ipsam nisi voluptas quas itaque? Aliquam.
      Non dicta tempore nisi eius hic laudantium recusandae tempora, aliquam eligendi voluptates aspernatur dolor exercitationem magnam, ab libero autem aperiam accusantium porro totam sit quae incidunt ex eaque sint. Perspiciatis.
      Ullam ratione voluptatem cum itaque earum reiciendis est omnis sed voluptate quis consequuntur nulla, quisquam unde excepturi blanditiis. Alias nostrum provident inventore consectetur quo distinctio dignissimos fugit optio molestias blanditiis!
      Cum, quis ab voluptate hic quidem reiciendis obcaecati deserunt iusto tempore molestias eligendi dolorum exercitationem? Eveniet non commodi exercitationem a ipsa, corrupti, maxime, similique necessitatibus quam tempora facilis numquam veniam.
      Quos repellendus velit, vitae facere, fuga autem voluptatem pariatur perspiciatis, numquam sequi officiis. Unde, est. Tempora quam dolores dolore deserunt a perspiciatis ex reiciendis unde, nisi, aut dicta natus fugit?
      Necessitatibus aut nulla natus praesentium autem ullam eos, hic tempore quis suscipit ab, perspiciatis earum magnam illo! Consequatur earum reiciendis dolorem sint asperiores. Numquam rem aliquam repellendus laboriosam id odit.
      Velit non beatae unde molestias optio, sint cupiditate sequi placeat, cumque, error blanditiis nihil aut ipsam assumenda animi atque dolores magni. Nesciunt sint hic eius itaque, magni harum nulla adipisci.
      Sit, ipsam modi esse nobis sed minima enim quas sequi cumque vel autem eum molestias veniam! Autem repellendus odio assumenda quidem, accusamus facilis, ipsum similique et est officia illo soluta.
      Suscipit quas sapiente, vero quidem dolorum obcaecati ex magnam placeat, reprehenderit ipsam, accusamus temporibus eius natus molestias ullam rerum hic? Nisi beatae voluptas facilis esse, pariatur eius saepe asperiores numquam.
      Iste quo quisquam ratione quidem accusantium incidunt quos itaque assumenda. Dignissimos, voluptatibus dolorem similique repudiandae consequatur, molestias minus placeat praesentium maxime voluptates odit obcaecati ratione dolore quod excepturi omnis laborum?
      Ab, unde quos sint dolorum repellat at vitae et enim, culpa non dicta molestias assumenda sequi error, doloribus exercitationem commodi blanditiis vero. Libero assumenda, quo dicta ad tempore inventore ullam!
      Culpa, blanditiis quae. Odit fuga alias, eius temporibus eos, consequuntur rem voluptatibus dolor officia cum deserunt? Fuga, odit. Assumenda deserunt ut cumque quibusdam maxime ad inventore itaque ipsum consectetur esse!
      Dignissimos culpa doloribus atque officiis maxime dolore sequi, autem sit facilis, ut debitis eius expedita ad labore amet accusantium veniam perspiciatis commodi at itaque similique temporibus error. Voluptatum, excepturi in!
      Culpa unde quaerat saepe totam quasi, deleniti incidunt cum quae quidem, alias id. Sit eum amet quaerat doloribus in, ad dolorem dolore ut quis quos iusto quo consectetur deleniti molestiae!
      Ratione molestiae, minus quas debitis optio quia quod at quibusdam pariatur tempore neque aliquid odio a nostrum voluptatibus voluptatum possimus unde ex. Tenetur veritatis praesentium voluptates maiores enim. Dignissimos, libero!
    </div>
  )
}

export default Home
