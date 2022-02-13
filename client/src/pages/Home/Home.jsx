/* eslint-disable max-len */
import React from 'react';
import './style.css';

function Home() {
  return (
    <div>
      <div className="valueProp">
        <h1 style={{ paddingBottom: '10px' }}>Возьмите рабочие задачи под контроль и наведите порядок в жизни</h1>
        <h5>Теперь когда заметки, задачи и расписание в одном месте, вы ничего не забудете и справитесь с любым проектом.</h5>
      </div>
      <div className="heroRow">
        <div>
          <img src="https://evernote.com/c/assets/homepage-repackaging/task_hero_image@2x__ru.png?de77a85295394c9d" alt="" />
        </div>
        <div>
          <div className="textheading">
            <p>РАБОТАЙТЕ В ЛЮБОМ МЕСТЕ</p>
          </div>
          <div className="textdescription">
            <p>Держите все важное под рукой — ваши заметки автоматически синхронизируются между всеми вашими устройствами.</p>
          </div>
          <div className="textheading">
            <p>ПОМНИТЕ ОБО ВСЕМ</p>
          </div>
          <div className="textdescription">
            <p>Пусть от заметок будет больше толка — добавляйте текст, изображения, аудиофайлы, сканы, PDF и документы.</p>
          </div>
          <div className="textheading">
            <p>ПУСТЬ СПИСОК ДЕЛ СТАНЕТ СПИСКОМ СДЕЛАННОГО</p>
          </div>
          <div className="textdescription">
            <p>Соберите вместе заметки, задачи и свое расписание, чтобы было проще справляться с делами.</p>
          </div>
          <div className="textheading">
            <p>БЫСТРО НАХОДИТЕ НУЖНОЕ</p>
          </div>
          <div className="textdescription">
            <p>Находите нужное в нужный момент благодаря мощным и гибким возможностям поиска.</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
