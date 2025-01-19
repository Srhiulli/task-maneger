import "./AddTaskDialog.css"

import { useRef, useState } from "react"
import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"
import { v4 } from "uuid"

import Button from "./Button"
import Input from "./Input"
import SelectTime from "./SelectTime"

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [errors, setErrors] = useState([])

  const nodeRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const timeRef = useRef()
  //Acessar o elemento HTML do input de título

  const handleSaveClick = () => {
    let errors = []
    const title = titleRef.current.value
    const description = descriptionRef.current.value
    const time = timeRef.current.value

    if (!title.trim()) {
      errors.push({ inputName: "title", message: "Campo obrigatório" })
    }
    if (!time.trim()) {
      errors.push({ inputName: "time", message: "Campo obrigatório" })
    }
    if (!description.trim()) {
      errors.push({ inputName: "description", message: "Campo obrigatório" })
    }

    setErrors(errors)

    if (errors.length > 0) {
      return
    }

    handleSubmit({
      id: v4(),
      title: titleRef.current.value,
      time: timeRef.current.value,
      description: descriptionRef.current.value,
      status: "not_started",
    })

    handleClose()
  }

  const titleErrors = errors.find((error) => error.inputName === "title")
  const timeErrors = errors.find((error) => error.inputName === "time")
  const descriptionErrors = errors.find(
    (error) => error.inputName === "description"
  )
  return (
    <CSSTransition
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-xl font-semibold text-brand-dark-blue">
                Nova Tarefa
              </h2>
              <p className="mb-4 mt-1 text-sm text-brand-text-gray">
                Insira as informações abaixo
              </p>
              <div className="flex w-[336px] flex-col space-y-4">
                <Input
                  id="title"
                  label="Título"
                  placeholder="Insira o título da tarefa"
                  errorMessage={titleErrors?.message}
                  ref={titleRef}
                />

                <SelectTime errorMessage={timeErrors?.message} ref={timeRef} />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  ref={descriptionRef}
                  errorMessage={descriptionErrors?.message}
                />

                <div className="flex gap-3">
                  <Button
                    size="large"
                    className="w-full"
                    variant="ghost"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                  <Button
                    className="w-full"
                    size="large"
                    onClick={() => handleSaveClick()}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  )
}

export default AddTaskDialog
