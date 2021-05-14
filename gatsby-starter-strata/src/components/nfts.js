import img_cascanueces from '../assets/images/fulls/cascanueces.png'
import img_estaciones from '../assets/images/fulls/estaciones.png'

const url = 'https://api.opensea.io/api/v1/assets?token_ids=168&token_ids=109243918961687695430420208234111469322458866391792481707832184074211522772993&token_ids=17344&asset_contract_addresses=0x417cf58dc18edd17025689d13af2b85f403e130c&asset_contract_addresses=0x495f947276749ce646f68ac8c248420045cb7b5e&asset_contract_addresses=0xa5f1ea7df861952863df2e8d1312f7305dabf215&order_direction=desc&offset=0&limit=20';
const axios = require('axios');

const cascanueces= {
  id: 0,
  source: img_cascanueces,
  thumbnail: img_cascanueces,
  caption: "El Cascanueces",
  description: "Arte digital creado para el programa del ballet 2017"
};
const estaciones = {
  id: 1,
  source: img_estaciones,
  thumbnail: img_estaciones,
  caption: "Las Estaciones",
  description: "Arte digital creado para el programa de la ópera 2018"
};

let nfts = [cascanueces, estaciones];
function RequestNFTs() {
  return axios.get(url)
    .then(function (response) {
      response.data.assets.forEach((asset, i) => {nfts.push({
        id: i+2,
        source: asset.image_url,
        thumbnail: asset.image_url,
        caption: asset.name,
        description: asset.description,
        permalink: asset.permalink
      })})
      console.log("devuelvo", nfts);
      return nfts;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return [];
    });
}

export default RequestNFTs;
