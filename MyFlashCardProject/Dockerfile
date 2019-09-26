FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY MyFlashCardProject/MyFlashCardProject.csproj MyFlashCardProject/
COPY FlashCard.DataModel/FlashCard.DataModel.csproj FlashCard.DataModel/
COPY FlashCard.BusinessLogic/FlashCard.BusinessLogic.csproj FlashCard.BusinessLogic/
RUN dotnet restore MyFlashCardProject/MyFlashCardProject.csproj
COPY . .
WORKDIR /src/MyFlashCardProject
RUN dotnet build MyFlashCardProject.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish MyFlashCardProject.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "MyFlashCardProject.dll"]
