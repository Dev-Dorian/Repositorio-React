import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        id: 1,
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        id: 2,
        userName: 'pheralb',
        name: 'Pablo Guzman',
        isFollowing: false
    },
    {
        id: 3,
        userName: 'DorianRCR',
        name: 'Dorian Hidalgo',
        isFollowing: true
    },
    {
        id: 4,
        userName: 'MariaHc',
        name: 'Maria Quiros',
        isFollowing: false
    },
]

export function App () {

    return (
        <section className='App'>
            {
                users.map(({id, userName, name, isFollowing}) => (
                    
                        <TwitterFollowCard    
                        key={id}                         
                        userName= {userName}
                        initialIsFollowing = {isFollowing}>

                            {name}
                        </TwitterFollowCard>
                    
                ))
            }
        </section>
        
    )
}