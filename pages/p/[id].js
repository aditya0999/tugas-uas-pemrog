import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <h3>PROFIL MAHASISWA STIKOM PGRI BANYUWANGI</h3>
        <h4>Nama : aditya wahyunizar<br/>
        Tempat,Tgl Lahir : banyuwangi 05 november 1999<br/>
        Alamat : Banyuwangi <br/>
        Pekerjaan : Mahasiswa/ Guru<br/> 
        Hobi : FUTSAL<br/>
        NIM : 1118101630<br/>
        JURUSAN : S1 TEKNIK INFORMATIKA - MALAM 2018
        </h4>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;