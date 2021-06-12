class Particle
{
    constructor(x,y,r)
    {
        var Property =
        {
            restitution: .4
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Matter.Bodies.circle(this.x, this.y, this.r, Property)
        this.color = 'blue'
        World.add(world, this.body)

    }

    display()
    {
        var angle = this.body.angle
        var pos = this.body.position
        push()
            translate(pos.x, pos.y)
            rotate(angle)
            fill(this.color)
            ellipseMode(CENTER)
            ellipse(0, 0, this.r)
        pop()
    }

}