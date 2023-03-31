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
