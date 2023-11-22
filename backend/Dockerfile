FROM python:3.11-alpine

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED 1

WORKDIR /backend

RUN python -m venv /venv
ENV PATH="/venv/bin:$PATH"

RUN pip install --upgrade pip
COPY pyproject.toml poetry.lock ./
COPY . .

RUN pip install poetry \
    && poetry config virtualenvs.create false \
    && poetry install --no-interaction --no-root 

ENTRYPOINT ["/bin/sh", "-c", "chmod +x /backend/entrypoint.sh && /backend/entrypoint.sh"]

EXPOSE 8000
