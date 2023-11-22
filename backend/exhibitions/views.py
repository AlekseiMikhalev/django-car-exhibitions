from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Exhibition
from .serializers import ExhibitionSerializer
from cars.serializers import CarSerializer


@api_view(['GET'])
def all_exhibitions(request):
    """
    Retrieve a list of all exhibitions.

    Returns:
        Response: JSON response with the serialized list of exhibitions.
    """
    exhibitions = Exhibition.objects.all()
    serializer = ExhibitionSerializer(exhibitions, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def exhibition_detail(request, title):
    """
    Retrieve details of a specific exhibition.

    Args:
        request (HttpRequest): The HTTP request.
        title (str): The title of the exhibition.

    Returns:
        Response: JSON response with the serialized exhibition details.
    """
    exhibition = get_object_or_404(Exhibition, title=title)
    serializer = ExhibitionSerializer(exhibition)
    return Response(serializer.data)


@api_view(['GET'])
def cars_in_exhibition(request, title):
    """
    Retrieve a list of cars in a specific exhibition.

    Args:
        request (HttpRequest): The HTTP request.
        title (str): The title of the exhibition.

    Returns:
        Response: JSON response with the serialized list of cars.
    """
    exhibition = get_object_or_404(Exhibition, title=title)
    cars = exhibition.cars.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)
