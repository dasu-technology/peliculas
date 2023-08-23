function MovieInfo({ title, description, price }: { title: string, description: string, price: number }): JSX.Element {
    return (
      <div className=" font-primary">
        <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
          {title}
        </h1>
        <p className="font-medium text-lg">
          {description}
        </p>
      </div>
    )
  }
  
  export default MovieInfo;