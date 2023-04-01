# OOP JS

1. Simplest way to bundle data => [object]

## ways to create objects:
1. object literal:
<script>
    const object = {
        name: 'foo',
        age: 36,
        talk(){
            console.log('Hello');
        }
    };
</script>

2.  dot notation:
<script>
    const object2 = {};

    object2.name = 'Adrian';
    object2.age = 20;
    object2.talk = function(){ console.log('Hello');}
</script>

3. Object.create => built in method

`Too much DRY`

4. Function to create objects => untenable => you cant waste memory creating a copy of a method for every single object you generate.

## Prototype Chain:

- How does the new keyword works under the hood? 

**Object.create()** => *hidden bond*. => [__proto__] => `make a link => hidden bond.`
- Js prototypeal nature. => not give up inmediatly when you dont find somthing in the object encapsulation.

## new & this KEYWORD:
