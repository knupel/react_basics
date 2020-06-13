import React from 'react';

/** currencyCode :
 * https://www.iban.com/currency-codes
 * https://www.xe.com/iso4217.php
 */
function ElemGalery(props) {
  return (
    <div className="elemGalery">
      <img alt={props.info.title} className="thumbnail" src={props.info.link} />
      <h2>{props.info.title}</h2>
      <p>{props.info.author}</p>
      <p>{props.info.date}</p>
      {/* <p>{props.info.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}{' '} */}
      <p>
        {props.info.price.toLocaleString('fr-FR', {
          style: 'currency',
          currency: 'EUR'
        })}{' '}
      </p>
    </div>
  );
}

// via data
const artwork_data = [
  {
    title: 'Attaque génétique',
    author: 'stan le punk',
    date: '2017',
    id: 20170,
    price: 600,
    link:
      'https://previews.dropbox.com/p/thumb/AA2YaP6ZYjci6JyG-THhedPuUECxftWvGWxYvtQnGyHshsG_85TMPfGC7Op5EwBjqhIV2cW-DGAjz7v-y3tEQnayDtgXQO-dFetBbPU57XIE9Tp3ul4ZS5ppij_1RTrSHMZLd7W4fmxdn0-H8KA5OzPHD2CPrpQVZjq9ooORJnKKQdMrOOU5Pl4NOakqIu9Id9YzXx4qVSlp33HfDnPfWjln8-A938f4OjYOIOiWyTwox7Ppd1SEln-_byA3XhgadMGdGsLUdda3J3XYPU7ZqpHUT4UBDJKxpcTqCKYMB0DvZ9plRWhuAH5EH1VUfSohYQxWgUhTT15UgmL3mWB71LazIKJpjdBagZJWCImPQvmS8Q/p.jpeg?fv_content=true&size_mode=5'
  },
  {
    title: 'Phoenix',
    author: 'stan le punk',
    date: '2015',
    id: 20150,
    price: 400,
    link:
      'https://previews.dropbox.com/p/thumb/AA1njhWDWqxno9bmhd6uJtC2W8erdYaV3d1meebyhwymv8hKLzdjC8_Dodc3-H_JoTY-NR7CkS-1_aWxWQfwH8kja52Gi988atW2BuPoBlP8pu223EoyMQpGLsPktZbb5IdL-3rM0phPGJ3HUGNcS1-CVI3i6ORf6zq3YUvxEeenl4CIwfCVrOxHvxNeCN48WxeIsh4ysBzVBcUEb7YG79SuS2MSRCaeQ8oZ1pZoIYHPLZGRm1HUt91ByAQdb5tWyPbbGwX25oCAgFzifkgecJasuTe3jzFqE_FCxDeBH8cRDYiZXlFbAobTeVfsG5aIdQeYQUigC0ScySNGJqdJmz4nqcTRuhEEYvthvHJYxijvPg/p.jpeg?fv_content=true&size_mode=5'
  }
];

/**
 * With the method below you can imagine use array method on your array and that's good
 */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

export function GaleryV1() {
  const galery_components = artwork_data.map((elem) => (
    <ElemGalery
      key={elem.id}
      info={{
        title: elem.title,
        author: elem.author,
        date: elem.date,
        price: elem.price,
        link: elem.link
      }}
    />
  ));
  return galery_components;
}

// direct galery elemnts
export function GaleryV0() {
  return (
    <React.StrictMode>
      <ElemGalery
        info={{
          title: 'Attaque génétique',
          author: 'stan le punk',
          date: '2017',
          id: 20170,
          link:
            'https://previews.dropbox.com/p/thumb/AA2YaP6ZYjci6JyG-THhedPuUECxftWvGWxYvtQnGyHshsG_85TMPfGC7Op5EwBjqhIV2cW-DGAjz7v-y3tEQnayDtgXQO-dFetBbPU57XIE9Tp3ul4ZS5ppij_1RTrSHMZLd7W4fmxdn0-H8KA5OzPHD2CPrpQVZjq9ooORJnKKQdMrOOU5Pl4NOakqIu9Id9YzXx4qVSlp33HfDnPfWjln8-A938f4OjYOIOiWyTwox7Ppd1SEln-_byA3XhgadMGdGsLUdda3J3XYPU7ZqpHUT4UBDJKxpcTqCKYMB0DvZ9plRWhuAH5EH1VUfSohYQxWgUhTT15UgmL3mWB71LazIKJpjdBagZJWCImPQvmS8Q/p.jpeg?fv_content=true&size_mode=5'
        }}
      />
      <ElemGalery
        info={{
          title: 'Phoenix',
          author: 'stan le punk',
          date: '2015',
          id: 20150,
          link:
            'https://previews.dropbox.com/p/thumb/AA1njhWDWqxno9bmhd6uJtC2W8erdYaV3d1meebyhwymv8hKLzdjC8_Dodc3-H_JoTY-NR7CkS-1_aWxWQfwH8kja52Gi988atW2BuPoBlP8pu223EoyMQpGLsPktZbb5IdL-3rM0phPGJ3HUGNcS1-CVI3i6ORf6zq3YUvxEeenl4CIwfCVrOxHvxNeCN48WxeIsh4ysBzVBcUEb7YG79SuS2MSRCaeQ8oZ1pZoIYHPLZGRm1HUt91ByAQdb5tWyPbbGwX25oCAgFzifkgecJasuTe3jzFqE_FCxDeBH8cRDYiZXlFbAobTeVfsG5aIdQeYQUigC0ScySNGJqdJmz4nqcTRuhEEYvthvHJYxijvPg/p.jpeg?fv_content=true&size_mode=5'
        }}
      />
    </React.StrictMode>
  );
}
