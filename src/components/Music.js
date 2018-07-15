import React, { Component } from 'react'
import { Grid, Header, Icon, Table } from 'semantic-ui-react'
import ReactAudioPlayer from 'react-audio-player'

class Music extends Component {
  constructor(props){
    super(props)
    this.state = {
      musics: [
        {title: 'Daybreak feat Henk', src: 'http://res.cloudinary.com/dfexdylbf/video/upload/v1531659938/Jens_East_-_Daybreak_feat_Henk_ca3ts8.mp3'},
        {title: 'Ignite', src: 'http://res.cloudinary.com/dfexdylbf/video/upload/v1531659936/Rue_de_Prague_-_01_-_Ignite_cmq5jw.mp3'},
        {title: 'EclecticPrawn', src: 'http://res.cloudinary.com/dfexdylbf/video/upload/v1531659907/DumboGetsMad-EclecticPrawn_mtnfvr.mp3'},
        {title: 'Final', src: 'http://res.cloudinary.com/dfexdylbf/video/upload/v1531659896/KSoviet04Final_uu9bqh.mp3'},
        {title: 'FalseStart', src: 'http://res.cloudinary.com/dfexdylbf/video/upload/v1531659889/UniformMotion-5-01FalseStart_q3cvpx.mp3'},
        {title: 'DaysPast', src: 'http://res.cloudinary.com/dfexdylbf/video/upload/v1531564272/InClosing-DaysPast_wruaxr.mp3'},
        {title: 'SummerSpliffs', src: 'http://res.cloudinary.com/dfexdylbf/video/upload/v1531564268/BrokeForFree-SummerSpliffs_wvnpkx.mp3'},
        {title: 'Showdown grtyie', src: 'http://res.cloudinary.com/dfexdylbf/video/upload/v1531564264/Creo-Showdown_grtyie.mp3'},
        {title: 'JourneysReflection', src: 'http://res.cloudinary.com/dfexdylbf/video/upload/v1531564260/DarrenCurtis-JourneysReflection_lp7r59.mp3'},
        {title: 'Reset', src: 'http://res.cloudinary.com/dfexdylbf/video/upload/v1531564211/Jaunter-Reset_qmirgr.mp3'}
      ],
      playlist: [],
      autoPlay: false,
      idPlay: 0,
      onPlay: false,
      onPause: true
    }
    this.playMusic = this.playMusic.bind(this)
    this.addPlaylist = this.addPlaylist.bind(this)
    this.playNext = this.playNext.bind(this)
    this.onPlay = this.onPlay.bind(this)
    this.onPause = this.onPause.bind(this)
  }

  playMusic(playMusic){
    let newPlaylist = this.state.playlist
    this.setState({
      playlist: []
    })
    let idFind
    let inPlaylist = newPlaylist.find((music, id) => {
      idFind = id
      return music.title === playMusic.title
    })
    if(inPlaylist){
      newPlaylist.splice(idFind, 1)
    }
    newPlaylist.unshift(playMusic)
    this.setState({
      playlist: newPlaylist,
      autoPlay: true
    })
  }

  addPlaylist(addMusic){
    let newPlaylist = this.state.playlist
    let inPlaylist = newPlaylist.find((music) => {
      return music.title === addMusic.title;
    })
    if(!inPlaylist){
      newPlaylist.push(addMusic)
      this.setState({
        playlist: newPlaylist,
        autoPlay: false
      })
    }
  }

  deleteFromPlaylist(idDelete){
    let newPlaylist = this.state.playlist.filter((music, id) => {
      return id !== idDelete
    })
    this.setState({
      playlist: newPlaylist
    })
  }

  playMusicOfPlaylist(music, id){
    this.deleteFromPlaylist(id)
    this.playMusic(music)
  }

  playNext(){
    let idPlay
    if(this.state.idPlay === this.state.playlist.length-1){
      idPlay = 0
    } else {
      idPlay = this.state.idPlay+1
    }
    this.setState({
      idPlay: idPlay
    })
  }

  onPlay(){
    this.setState({
      onPlay: true,
      onPause: false
    })
  }

  onPause(){
    this.setState({
      onPlay: false,
      onPause: true
    })
  }

  render() {
    return (
      <Grid>
        <Grid.Row centered>
          <Header as='h2'>
            <Icon name='music' />
            <Header.Content>Music</Header.Content>
          </Header>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
            <h3>PLAYER</h3>
            <ReactAudioPlayer
              src={this.state.playlist.length > 0?this.state.playlist[this.state.idPlay].src:''}
              controls
              autoPlay={this.state.autoPlay}
              onEnded={this.playNext}
              onPlay={this.onPlay}
              onPause={this.onPause}
            />
          </Grid.Column>
          <Grid.Column>
            <h3>MUSIQUE</h3>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Titre</Table.HeaderCell>
                  <Table.HeaderCell>Lecture de la musique</Table.HeaderCell>
                  <Table.HeaderCell>Ajout à la playlist</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {
                  this.state.musics.map((music, id) => {
                    return(
                      <Table.Row key={id}>
                        <Table.Cell>{music.title}</Table.Cell>
                        <Table.Cell><Icon link name='play' onClick={() => this.playMusic(music)}/></Table.Cell>
                        <Table.Cell><Icon link name='plus' color='orange' onClick={() => this.addPlaylist(music)}/></Table.Cell>
                      </Table.Row>
                    )
                  })
                }
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <h3>PLAYLIST</h3>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Title</Table.HeaderCell>
                  <Table.HeaderCell>Lecture du titre maintenant</Table.HeaderCell>
                  <Table.HeaderCell>Supprimer de la playlist</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {
                  this.state.playlist.length > 0
                  ?this.state.playlist.map((music, id) => {
                    return(
                      <Table.Row key={id}>
                        <Table.Cell>{music.title}</Table.Cell>
                        <Table.Cell><Icon link name='play' color={this.state.idPlay === id?this.state.onPlay?'green':'black':'black'} onClick={() => this.playMusicOfPlaylist(music, id)}/></Table.Cell>
                        <Table.Cell><Icon link name='trash' color='red' onClick={() => this.deleteFromPlaylist(id)}/></Table.Cell>
                      </Table.Row>
                    )
                  })
                  :<Table.Row><Table.Cell textAlign='center' colSpan='3'>Votre playlist est vide</Table.Cell></Table.Row>
                }
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Music