import { useForm } from 'react-hook-form'

const SignUpForm = () => {
  const { register, errors, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data) //for testing
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          Name
        </label>
        <input id="name" type="text" name="name" ref={register({ required: 'Please enter a name', })} />
        {errors.name && (
          <div>{errors.name.message}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">
          Email address
        </label>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            ref={register(
              {
                required: 'Please enter an email',
                pattern: {
                  value: /^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,
                  message: 'Not a valid email',
                },
              })}
          />
          {errors.email && (
            <div>
              {errors.email.message}
            </div>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <div>
          <input
            id="password"
            type="password"
            name="password"
            ref={register({
              required: 'Please enter a password',
              minLength: {
                value: 6,
                message: 'Password should have at least 6 characters'
              },
            })}
          />
          {errors.password && (
            <div>
              {errors.pasword.message}
            </div>
          )}
        </div>
      </div>
      <div>
        <button type="submit">
          Sign Up
        </button>
      </div>
    </form>
  )
}

export default SignUpForm