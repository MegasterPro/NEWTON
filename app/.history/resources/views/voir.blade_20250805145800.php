<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Voir</title>
</head>
<body>
    <h1>On va voir</h1>

    @foreach ($user as $users)
        {{-- <h1>Hi {{$user->email}}</h1> --}}
    @endforeach

    @dump($user)
</body>
</html>